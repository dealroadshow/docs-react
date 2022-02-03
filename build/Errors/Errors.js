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
var lodash_1 = __importDefault(require("lodash"));
var Table_1 = __importDefault(require("@material-ui/core/Table"));
var TableBody_1 = __importDefault(require("@material-ui/core/TableBody"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableHead_1 = __importDefault(require("@material-ui/core/TableHead"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var core_1 = require("@material-ui/core");
var react_json_view_1 = __importDefault(require("react-json-view"));
var styles = function (theme) { return ({
    code: {
        marginLeft: theme.spacing(2),
    },
}); };
var Errors = /** @class */ (function (_super) {
    __extends(Errors, _super);
    function Errors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Errors.prototype.render = function () {
        var _this = this;
        var _a = this.props, errors = _a.errors, classes = _a.classes;
        if (!errors || errors.length === 0) {
            return null;
        }
        return (react_1.default.createElement(core_1.Grid, { container: true },
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(core_1.Typography, { variant: "h5" }, "Errors")),
            react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                react_1.default.createElement(Table_1.default, null,
                    react_1.default.createElement(TableHead_1.default, null,
                        react_1.default.createElement(TableRow_1.default, null,
                            react_1.default.createElement(TableCell_1.default, null, "Code"),
                            react_1.default.createElement(TableCell_1.default, null, "Message"),
                            react_1.default.createElement(TableCell_1.default, null, "Data"))),
                    react_1.default.createElement(TableBody_1.default, null, errors.map(function (row) { return (react_1.default.createElement(TableRow_1.default, { key: row.code },
                        react_1.default.createElement(TableCell_1.default, { component: "th", scope: "row" }, row.code),
                        react_1.default.createElement(TableCell_1.default, null, row.message),
                        react_1.default.createElement(TableCell_1.default, { className: classes.code }, lodash_1.default.isObject(row.data) ?
                            react_1.default.createElement(react_json_view_1.default, __assign({ src: row.data }, _this.props.reactJsonOptions, { enableClipboard: false })) : row.data))); }))))));
    };
    return Errors;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(Errors);
