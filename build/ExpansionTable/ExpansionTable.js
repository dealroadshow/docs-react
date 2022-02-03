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
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var styles_1 = require("@material-ui/core/styles");
var styles = function (theme) { return ({
    heading: {
        flexBasis: "33.33%",
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(15),
    },
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(6),
        width: "100%",
    },
    secondaryHeading: {
        alignSelf: "end",
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(15),
    },
}); };
var ExpansionTable = /** @class */ (function (_super) {
    __extends(ExpansionTable, _super);
    function ExpansionTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionTable.prototype.render = function () {
        var _a = this.props, headers = _a.headers, children = _a.children, classes = _a.classes;
        if (!headers || headers.length === 0) {
            return null;
        }
        return (react_1.default.createElement(Table_1.default, null,
            react_1.default.createElement(TableHead_1.default, null,
                react_1.default.createElement(TableRow_1.default, null, headers.map(function (header, i) {
                    return (react_1.default.createElement(TableCell_1.default, { key: i, align: i === 0 ? undefined : "right" }, header));
                }))),
            react_1.default.createElement(TableBody_1.default, null, children)));
    };
    return ExpansionTable;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(ExpansionTable);
