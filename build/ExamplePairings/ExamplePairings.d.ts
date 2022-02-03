import React, { Component } from "react";
import { MethodObject, ExamplePairingObject } from "@open-rpc/meta-schema";
interface IProps {
    method?: MethodObject;
    examples?: ExamplePairingObject[];
    uiSchema?: any;
    reactJsonOptions?: any;
}
interface IState {
    anchorEl: Element | null;
    selectedIndex: number;
    currentExample?: ExamplePairingObject;
}
declare class ExamplePairings extends Component<IProps, IState> {
    constructor(props: IProps);
    componentWillMount(): void;
    handleClickListItem: (event: React.MouseEvent) => void;
    handleMenuItemClick: (event: React.MouseEvent, index: number) => void;
    handleClose: () => void;
    render(): JSX.Element | null;
}
export default ExamplePairings;
