import React from "react";
import { Theme, WithStyles } from "@material-ui/core";
import { ExamplePairingObject } from "@open-rpc/meta-schema";
export declare type TParamStructure = "either" | "by-name" | "by-position";
interface IProps extends WithStyles<typeof styles> {
    examplePairing?: ExamplePairingObject;
    paramStructure?: TParamStructure;
    methodName?: string;
    uiSchema?: any;
    reactJsonOptions?: any;
}
declare const styles: (theme: Theme) => {
    description: {
        color: string;
    };
};
declare const _default: React.ComponentType<Pick<IProps, "uiSchema" | "reactJsonOptions" | "examplePairing" | "paramStructure" | "methodName"> & import("@material-ui/core").StyledComponentProps<"description">>;
export default _default;
