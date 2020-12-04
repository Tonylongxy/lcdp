import React from 'react';
import NodeModel from "../NodeModel";
import { InputNodeOptions } from "./InputNode";

/**
 * 填写节点配置器属性
 */
interface InputNodeConfigerProps {
    dataModel: NodeModel<InputNodeOptions>; // 节点的数据模型
}

/**
 * 填写节点配置器
*/
export default function InputNodeConfiger(props: InputNodeConfigerProps) {
    return (
        <div>
            <p>这是一个InputNodeConfiger</p>
        </div>
    );
}




