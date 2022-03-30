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
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var core_1 = require("@material-ui/core");
var react_json_view_1 = __importDefault(require("react-json-view"));
var ExpansionTable_1 = __importDefault(require("../ExpansionTable/ExpansionTable"));
var MarkdownDescription_1 = __importDefault(require("../MarkdownDescription/MarkdownDescription"));
var styles = function (theme) { return ({
    description: {
        color: theme.palette.text.primary,
    },
    heading: {
        flexBasis: "33.33%",
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(15),
    },
    paramsMargin: {
        marginTop: theme.spacing(2),
    },
    secondaryHeading: {
        alignSelf: "end",
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(15),
    },
}); };
var Servers = /** @class */ (function (_super) {
    __extends(Servers, _super);
    function Servers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Servers.prototype.render = function () {
        var _a = this.props, servers = _a.servers, noTitle = _a.noTitle, reactJsonOptions = _a.reactJsonOptions, uiSchema = _a.uiSchema, classes = _a.classes;
        if (!servers || servers.length === 0) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            noTitle ? null : react_1.default.createElement(core_1.Typography, { variant: "h2" }, "Servers"),
            react_1.default.createElement(ExpansionTable_1.default, { headers: ["Name", "Url", "Summary"] },
                react_1.default.createElement(TableRow_1.default, null,
                    react_1.default.createElement(TableCell_1.default, { colSpan: 6 }, servers.map(function (server, i) { return (react_1.default.createElement("div", { style: { width: "100%" }, key: i },
                        react_1.default.createElement(core_1.ExpansionPanel, { style: { width: "100%" }, defaultExpanded: uiSchema && uiSchema.servers["ui:defaultExpanded"], key: i },
                            react_1.default.createElement(core_1.ExpansionPanelSummary, { style: { justifyContent: "space-between" }, key: "servers-header", expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                                react_1.default.createElement(core_1.Typography, { className: classes.heading }, server.name),
                                react_1.default.createElement(core_1.Typography, { className: classes.secondaryHeading }, server.url),
                                react_1.default.createElement(core_1.Typography, { className: classes.secondaryHeading }, server.summary)),
                            react_1.default.createElement(core_1.ExpansionPanelDetails, { style: { display: "block" }, key: "servers-body" },
                                server.description &&
                                    react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: uiSchema, source: server.description, className: classes.description }),
                                server.variables &&
                                    react_1.default.createElement(core_1.Typography, { variant: "h6", gutterBottom: true, className: classes.paramsMargin }, "Variables"),
                                server.variables && react_1.default.createElement(react_json_view_1.default, __assign({ name: false, src: server.variables }, reactJsonOptions)))))); }))))));
    };
    return Servers;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(Servers);
