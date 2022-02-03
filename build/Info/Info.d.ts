import React from "react";
import { Theme, WithStyles } from "@material-ui/core/styles";
import { OpenrpcDocument } from "@open-rpc/meta-schema";
declare const styles: (theme: Theme) => {
    button: {
        margin: number;
    };
    chip: {
        margin: number;
    };
    description: {
        color: string;
        padding: string;
    };
};
interface IProps extends WithStyles<typeof styles> {
    schema?: OpenrpcDocument;
}
declare const _default: React.ComponentType<Pick<IProps, "schema"> & import("@material-ui/core/styles").StyledComponentProps<"button" | "chip" | "description">>;
export default _default;
