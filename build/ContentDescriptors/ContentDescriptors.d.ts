import { Component } from "react";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
interface IProps {
    schema?: OpenrpcDocument;
    disableTransitionProps?: boolean;
    uiSchema?: any;
}
export default class ContentDescriptors extends Component<IProps> {
    render(): JSX.Element | null;
}
export {};
