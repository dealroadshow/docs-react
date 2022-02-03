import { Component } from "react";
import { TagObject } from "@open-rpc/meta-schema";
interface IProps {
    tags?: TagObject[];
}
export default class Tags extends Component<IProps> {
    render(): JSX.Element | null;
}
export {};
