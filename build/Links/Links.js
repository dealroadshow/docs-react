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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var TableRow_1 = __importDefault(require("@material-ui/core/TableRow"));
var TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var styles_1 = require("@material-ui/core/styles");
var react_markdown_1 = __importDefault(require("react-markdown"));
var core_1 = require("@material-ui/core");
var ExpansionTable_1 = __importDefault(require("../ExpansionTable/ExpansionTable"));
var Servers_1 = __importDefault(require("../Servers/Servers"));
var react_json_view_1 = __importDefault(require("react-json-view"));
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
var Links = /** @class */ (function (_super) {
    __extends(Links, _super);
    function Links() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Links.prototype.render = function () {
        var _a = this.props, links = _a.links, uiSchema = _a.uiSchema, reactJsonOptions = _a.reactJsonOptions, classes = _a.classes;
        if (!links || links.length === 0) {
            return null;
        }
        return (react_1.default.createElement(ExpansionTable_1.default, { headers: ["Method", "Summary"] },
            react_1.default.createElement(TableRow_1.default, null,
                react_1.default.createElement(TableCell_1.default, { colSpan: 6 }, links.map(function (link, i) { return (react_1.default.createElement("div", { style: { width: "100%" }, key: i },
                    react_1.default.createElement(core_1.ExpansionPanel, { style: { width: "100%" }, defaultExpanded: uiSchema && uiSchema.links["ui:defaultExpanded"], key: i },
                        react_1.default.createElement(core_1.ExpansionPanelSummary, { style: { justifyContent: "space-between" }, key: "links-header", expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                            react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "100%", height: "100%" } },
                                react_1.default.createElement(Typography_1.default, { className: classes.heading }, link.method),
                                react_1.default.createElement(Typography_1.default, { className: classes.secondaryHeading }, link.summary))),
                        react_1.default.createElement(core_1.ExpansionPanelDetails, { style: { display: "block" }, key: "links-body" },
                            link.description && react_1.default.createElement(react_markdown_1.default, { source: link.description, className: classes.description }),
                            link.params && react_1.default.createElement(Typography_1.default, { variant: "h6", gutterBottom: true }, "Params"),
                            link.params && react_1.default.createElement(react_json_view_1.default, __assign({ src: link.params }, reactJsonOptions)),
                            link.server &&
                                react_1.default.createElement(Typography_1.default, { variant: "h6", gutterBottom: true, className: classes.paramsMargin }, "Server"),
                            link.server && react_1.default.createElement(Servers_1.default, { servers: [link.server], noTitle: true, reactJsonOptions: reactJsonOptions }))))); })))));
    };
    return Links;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(Links);
