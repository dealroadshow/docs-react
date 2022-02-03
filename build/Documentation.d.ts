import React from "react";
import { IMethodPluginProps, OnMethodToggle } from "./Methods/Methods";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
interface IProps {
    schema?: OpenrpcDocument;
    uiSchema?: any;
    reactJsonOptions?: any;
    methodPlugins?: Array<React.FC<IMethodPluginProps>>;
    onMethodToggle?: OnMethodToggle;
}
export default class Documentation extends React.Component<IProps> {
    constructor(props: IProps);
    render(): JSX.Element | null;
}
export {};
