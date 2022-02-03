"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@material-ui/core");
var JSONSchemaFields_1 = __importDefault(require("./fields/JSONSchemaFields"));
var colors_1 = require("@material-ui/core/colors");
var styles = {
    cellWidth: {
        width: "70px",
    },
};
var SchemaRenderer = function (_a) {
    var schema = _a.schema, required = _a.required, name = _a.name;
    if (schema.anyOf) {
        return (react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, name),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth },
                react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "any of")),
            react_1.default.createElement(core_1.TableCell, { colSpan: 5 }, schema.anyOf.map(function (p, i) { return react_1.default.createElement(JSONSchemaFields_1.default, { schema: p, key: i }); }))));
    }
    if (schema.allOf) {
        return (react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, name),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth },
                react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "all of")),
            react_1.default.createElement(core_1.TableCell, { colSpan: 5 }, schema.allOf.map(function (p, i) { return react_1.default.createElement(JSONSchemaFields_1.default, { schema: p, key: i }); }))));
    }
    if (schema.oneOf) {
        return (react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title || name),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth },
                react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "one of")),
            react_1.default.createElement(core_1.TableCell, { colSpan: 5 }, schema.oneOf.map(function (p, i) { return react_1.default.createElement(JSONSchemaFields_1.default, { schema: p, key: i }); }))));
    }
    if (schema.items instanceof Array) {
        return (react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, name),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth },
                react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "array of")),
            react_1.default.createElement(core_1.TableCell, { colSpan: 5 }, schema.items.map(function (p, i) { return react_1.default.createElement(JSONSchemaFields_1.default, { schema: p, key: i }); }))));
    }
    if (schema.items) {
        return (react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, name),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth },
                react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "array of")),
            react_1.default.createElement(core_1.TableCell, { colSpan: 5 },
                react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema.items }))));
    }
    if (schema.properties) {
        return (react_1.default.createElement(core_1.TableRow, null,
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, name),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title),
            react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth },
                react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "object")),
            react_1.default.createElement(core_1.TableCell, { colSpan: 5 },
                react_1.default.createElement(core_1.Table, null,
                    react_1.default.createElement(core_1.TableHead, null,
                        react_1.default.createElement(core_1.TableRow, null,
                            react_1.default.createElement(core_1.TableCell, null, "Name"),
                            react_1.default.createElement(core_1.TableCell, null, "Title"),
                            react_1.default.createElement(core_1.TableCell, null, "Type"),
                            react_1.default.createElement(core_1.TableCell, null, "Pattern"),
                            react_1.default.createElement(core_1.TableCell, null, "Required"),
                            react_1.default.createElement(core_1.TableCell, null, "Description"))),
                    react_1.default.createElement(core_1.TableBody, null, schema.properties &&
                        Object.entries(schema.properties)
                            .map(function (_a, i) {
                            var n = _a[0], prop = _a[1];
                            return (react_1.default.createElement(JSONSchemaFields_1.default, { key: n, schema: prop, name: n, hideHeader: true, required: schema.required && schema.required.includes(n) }));
                        }))))));
    }
    var colorMap = {
        any: colors_1.grey[500],
        array: colors_1.blue[300],
        boolean: colors_1.blue[500],
        integer: colors_1.purple[800],
        null: colors_1.yellow[900],
        number: colors_1.purple[500],
        string: colors_1.green[500],
        undefined: colors_1.grey[500],
    };
    return (react_1.default.createElement(core_1.TableRow, { key: schema.title },
        react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, name),
        react_1.default.createElement(core_1.TableCell, { colSpan: 1, style: styles.cellWidth }, schema.title),
        react_1.default.createElement(core_1.TableCell, { style: __assign(__assign({}, styles.cellWidth), { color: colorMap[schema.type] }) }, schema.type),
        react_1.default.createElement(core_1.TableCell, { style: styles.cellWidth }, schema.pattern),
        react_1.default.createElement(core_1.TableCell, { style: styles.cellWidth }, required ? "true" : "false"),
        react_1.default.createElement(core_1.TableCell, { style: styles.cellWidth }, schema.description)));
};
exports.default = SchemaRenderer;
