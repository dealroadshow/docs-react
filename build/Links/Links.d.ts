import React from "react";
import { Theme, WithStyles } from "@material-ui/core/styles";
import { LinkObject } from "@open-rpc/meta-schema";
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
    links?: LinkObject[];
    uiSchema?: any;
    reactJsonOptions?: any;
}
declare const _default: React.ComponentType<Pick<IProps, "uiSchema" | "reactJsonOptions" | "links"> & import("@material-ui/core").StyledComponentProps<"heading" | "description" | "secondaryHeading" | "paramsMargin">>;
export default _default;
