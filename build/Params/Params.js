"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var ContentDescriptor_1 = __importDefault(require("../ContentDescriptor/ContentDescriptor"));
var styles = function (theme) { return ({
    schema: {
        marginLeft: theme.spacing(8),
    },
    table: {
        padding: theme.spacing(2),
    },
    tableEnd: {
        paddingLeft: theme.spacing(3),
    },
    tableStart: {
        paddingLeft: theme.spacing(3),
    },
}); };
var Params = /** @class */ (function (_super) {
    __extends(Params, _super);
    function Params() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Params.prototype.render = function () {
        var _this = this;
        var _a = this.props, params = _a.params, classes = _a.classes, uiSchema = _a.uiSchema;
        if (!params || params.length === 0) {
            return null;
        }
        return (react_1.default.createElement(Table_1.default, { className: classes.table },
            react_1.default.createElement(TableHead_1.default, null,
                react_1.default.createElement(TableRow_1.default, null,
                    react_1.default.createElement(TableCell_1.default, { key: 1, className: classes.tableStart }, "Parameter Name"),
                    react_1.default.createElement(TableCell_1.default, { key: 2, align: "right" }, "Summary"),
                    react_1.default.createElement(TableCell_1.default, { key: 3, align: "right", className: classes.tableEnd }, "Required"))),
            react_1.default.createElement(TableBody_1.default, null,
                react_1.default.createElement(TableRow_1.default, null,
                    react_1.default.createElement(TableCell_1.default, { colSpan: 6 }, params.map(function (row) {
                        return react_1.default.createElement(ContentDescriptor_1.default, { key: row.name, contentDescriptor: row, uiSchema: uiSchema, disableTransitionProps: _this.props.disableTransitionProps });
                    }))))));
    };
    return Params;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(Params);
