import React from "react";
import { Theme, WithStyles } from "@material-ui/core/styles";
import { OpenrpcDocument, MethodObject as DefaultMethodObject } from "@open-rpc/meta-schema";
interface MethodObject extends DefaultMethodObject {
    headers: DefaultMethodObject["params"];
}
declare const styles: (theme: Theme) => {
    description: {
        color: string;
        width: string;
    };
    heading: {
        flexBasis: string;
        flexShrink: number;
        fontSize: string;
    };
    root: {
        marginBottom: number;
        marginTop: number;
        width: string;
    };
    secondaryHeading: {
        color: string;
        fontSize: string;
    };
};
export interface IMethodPluginProps {
    openrpcMethodObject: MethodObject;
}
export declare type OnMethodToggle = (method: string, expanded: boolean) => void;
interface IProps extends WithStyles<typeof styles> {
    schema?: OpenrpcDocument;
    uiSchema?: any;
    reactJsonOptions?: object;
    methodPlugins?: Array<React.FC<IMethodPluginProps>>;
    disableTransitionProps?: boolean;
    onMethodToggle?: OnMethodToggle;
}
declare const _default: React.ComponentType<Pick<IProps, "schema" | "uiSchema" | "reactJsonOptions" | "disableTransitionProps" | "methodPlugins" | "onMethodToggle"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "heading" | "description" | "secondaryHeading">>;
export default _default;
