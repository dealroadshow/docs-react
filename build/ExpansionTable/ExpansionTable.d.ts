import React from "react";
import { Theme, WithStyles } from "@material-ui/core/styles";
declare const styles: (theme: Theme) => {
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
        alignSelf: string;
        color: string;
        fontSize: string;
    };
};
interface IProps extends WithStyles<typeof styles> {
    headers?: string[];
    children: any;
}
declare const _default: React.ComponentType<Pick<IProps, "children" | "headers"> & import("@material-ui/core/styles").StyledComponentProps<"root" | "heading" | "secondaryHeading">>;
export default _default;
