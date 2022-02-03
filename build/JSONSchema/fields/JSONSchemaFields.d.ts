import React from "react";
import { Theme, WithStyles } from "@material-ui/core/styles";
import { JSONSchema4 } from "json-schema";
declare const styles: (theme: Theme) => {
    table: {
        background: string;
    };
};
interface IProps extends WithStyles<typeof styles> {
    schema?: JSONSchema4;
    name?: string;
    required?: boolean;
    hideHeader?: boolean;
}
declare const WrappedJSONSchemaFields: React.ComponentType<Pick<IProps, "required" | "name" | "schema" | "hideHeader"> & import("@material-ui/core/styles").StyledComponentProps<"table">>;
export default WrappedJSONSchemaFields;
