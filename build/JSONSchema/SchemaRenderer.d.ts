import React from "react";
import { JSONSchema4 } from "json-schema";
interface IProps {
    schema: JSONSchema4;
    required?: boolean;
    name?: string;
}
declare const SchemaRenderer: React.FC<IProps>;
export default SchemaRenderer;
