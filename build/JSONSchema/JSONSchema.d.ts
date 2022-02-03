import { Component } from "react";
import { JSONSchema4 } from "json-schema";
interface IProps {
    schema?: JSONSchema4;
}
declare class JSONSchema extends Component<IProps> {
    render(): JSX.Element;
}
export default JSONSchema;
