import React, { forwardRef, useImperativeHandle } from 'react';
import { NodeConfigProps, NodeConfigRef } from '../Node';
import { Form, Input } from 'antd';


/**
 * 开始节点配置器属性
 */
export interface StartNodeConfigProps extends NodeConfigProps {
    field1: boolean
}


/**
 * 开始节点配置器
*/
const StartNodeConfig = forwardRef<NodeConfigRef, StartNodeConfigProps>((props, ref) => {
    const [ form ] = Form.useForm();
    const { options, onOptionsValuesChange } = props;

    // 暴露内部的方法
    useImperativeHandle(ref, () => ({
        getOptions: () => {
            return {field1: 'xxx'}
        }
    }), []);

    return (
        <div>
            <p>这是一个StartNodeConfig</p>
            <br />
            <Form layout="vertical" form={form} onValuesChange={onOptionsValuesChange}>
                <Form.Item name="field1" label="请输入第一个参数" initialValue={options.field1}>
                    <Input.TextArea rows={1} />
                </Form.Item>
                <Form.Item name="field2" label="请输入第二个参数" initialValue={options.field2}>
                    <Input.TextArea rows={3} />
                </Form.Item>
            </Form>
        </div>
    );
});


export default StartNodeConfig;
