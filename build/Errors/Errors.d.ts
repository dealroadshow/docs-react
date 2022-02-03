import React from "react";
import { WithStyles } from "@material-ui/core/styles";
import { Theme } from "@material-ui/core";
import { ErrorObject } from "@open-rpc/meta-schema";
declare const styles: (theme: Theme) => {
    code: {
        marginLeft: number;
    };
};
interface IProps extends WithStyles<typeof styles> {
    errors?: ErrorObject[];
    reactJsonOptions?: any;
}
declare const _default: React.ComponentType<Pick<IProps, "reactJsonOptions" | "errors"> & import("@material-ui/core").StyledComponentProps<"code">>;
export default _default;
