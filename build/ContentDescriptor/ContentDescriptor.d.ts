import React from "react";
import { Theme, WithStyles } from "@material-ui/core";
import { ContentDescriptorObject } from "@open-rpc/meta-schema";
import "./ContentDescriptor.css";
declare const styles: (theme: Theme) => {
    description: {
        color: string;
    };
    heading: {
        flexBasis: string;
        flexShrink: number;
        fontSize: string;
    };
    secondaryHeading: {
        alignSelf: string;
        color: string;
        fontSize: string;
    };
};
interface IProps extends WithStyles<typeof styles> {
    contentDescriptor?: ContentDescriptorObject;
    hideIcon?: boolean;
    hideRequired?: boolean;
    disableTransitionProps?: boolean;
    uiSchema?: any;
}
declare const _default: React.ComponentType<Pick<IProps, "uiSchema" | "contentDescriptor" | "hideIcon" | "hideRequired" | "disableTransitionProps"> & import("@material-ui/core").StyledComponentProps<"heading" | "description" | "secondaryHeading">>;
export default _default;
