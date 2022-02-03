import React from "react";
import { Theme, WithStyles } from "@material-ui/core/styles";
import { ContentDescriptorObject } from "@open-rpc/meta-schema";
declare const styles: (theme: Theme) => {
    schema: {
        marginLeft: number;
    };
    table: {
        padding: number;
    };
    tableEnd: {
        paddingLeft: number;
    };
    tableStart: {
        paddingLeft: number;
    };
};
interface IProps extends WithStyles<typeof styles> {
    params?: ContentDescriptorObject[];
    disableTransitionProps?: boolean;
    uiSchema?: any;
}
declare const _default: React.ComponentType<Pick<IProps, "uiSchema" | "disableTransitionProps" | "params"> & import("@material-ui/core/styles").StyledComponentProps<"table" | "schema" | "tableEnd" | "tableStart">>;
export default _default;
