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
var core_1 = require("@material-ui/core");
var ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
var ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var json_schema_to_react_tree_1 = __importDefault(require("@xops.net/json-schema-to-react-tree"));
require("./ContentDescriptor.css");
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
    secondaryHeading: {
        alignSelf: "end",
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(15),
    },
}); };
var ContentDescriptor = /** @class */ (function (_super) {
    __extends(ContentDescriptor, _super);
    function ContentDescriptor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentDescriptor.prototype.render = function () {
        var _a = this.props, contentDescriptor = _a.contentDescriptor, classes = _a.classes, hideIcon = _a.hideIcon, hideRequired = _a.hideRequired, uiSchema = _a.uiSchema, disableTransitionProps = _a.disableTransitionProps;
        if (!contentDescriptor) {
            return null;
        }
        var entries = Object.entries(contentDescriptor);
        if (entries.length === 0) {
            return null;
        }
        return (react_1.default.createElement(ExpansionPanel_1.default, { style: { width: "100%" }, TransitionProps: { unmountOnExit: disableTransitionProps ? false : true }, defaultExpanded: uiSchema && uiSchema.params["ui:defaultExpanded"], expanded: contentDescriptor.name ? undefined : true },
            react_1.default.createElement(ExpansionPanelSummary_1.default, { expandIcon: (!contentDescriptor.name || hideIcon) ? null : react_1.default.createElement(ExpandMore_1.default, null), style: { justifyContent: "space-between" } },
                react_1.default.createElement("div", { style: { display: "flex", justifyContent: "space-between", width: "100%", height: "100%", alignItems: "center" } },
                    react_1.default.createElement(core_1.Typography, { className: classes.heading }, contentDescriptor.name),
                    react_1.default.createElement(core_1.Typography, { className: classes.secondaryHeading }, contentDescriptor.summary),
                    hideRequired ? null : react_1.default.createElement(core_1.Typography, { className: classes.secondaryHeading }, typeof contentDescriptor.required === "string"
                        ? contentDescriptor.required
                        : contentDescriptor.required ? "true" : "false"))),
            react_1.default.createElement(ExpansionPanelDetails_1.default, { style: { display: "block", overflowX: "auto" } },
                react_1.default.createElement(react_1.default.Fragment, null,
                    contentDescriptor.description &&
                        react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: uiSchema, source: contentDescriptor.description, className: classes.description }),
                    contentDescriptor.schema &&
                        react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(core_1.Typography, { variant: "body1", color: "primary" }, "schema"),
                            react_1.default.createElement(json_schema_to_react_tree_1.default, { schema: contentDescriptor.schema }))))));
    };
    return ContentDescriptor;
}(react_1.Component));
exports.default = core_1.withStyles(styles)(ContentDescriptor);
