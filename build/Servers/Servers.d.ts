import React from "react";
import { WithStyles, Theme } from "@material-ui/core/styles";
import { ServerObject } from "@open-rpc/meta-schema";
declare const styles: (theme: Theme) => {
    description: {
        color: string;
    };
    heading: {
        flexBasis: string;
        flexShrink: number;
        fontSize: string;
    };
    paramsMargin: {
        marginTop: number;
    };
    secondaryHeading: {
        alignSelf: string;
        color: string;
        fontSize: string;
    };
};
interface IProps extends WithStyles<typeof styles> {
    servers?: ServerObject[];
    uiSchema?: any;
    reactJsonOptions?: any;
    noTitle?: boolean;
}
declare const _default: React.ComponentType<Pick<IProps, "uiSchema" | "servers" | "reactJsonOptions" | "noTitle"> & import("@material-ui/core").StyledComponentProps<"heading" | "description" | "secondaryHeading" | "paramsMargin">>;
export default _default;
