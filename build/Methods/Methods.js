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
var ExpansionPanel_1 = __importDefault(require("@material-ui/core/ExpansionPanel"));
var ExpansionPanelSummary_1 = __importDefault(require("@material-ui/core/ExpansionPanelSummary"));
var ExpansionPanelDetails_1 = __importDefault(require("@material-ui/core/ExpansionPanelDetails"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ExpandMore_1 = __importDefault(require("@material-ui/icons/ExpandMore"));
var Params_1 = __importDefault(require("../Params/Params"));
var Headers_1 = __importDefault(require("../Headers/Headers"));
var ContentDescriptor_1 = __importDefault(require("../ContentDescriptor/ContentDescriptor"));
var ExamplePairings_1 = __importDefault(require("../ExamplePairings/ExamplePairings"));
var Errors_1 = __importDefault(require("../Errors/Errors"));
var Links_1 = __importDefault(require("../Links/Links"));
var Tags_1 = __importDefault(require("../Tags/Tags"));
var MarkdownDescription_1 = __importDefault(require("../MarkdownDescription/MarkdownDescription"));
var styles = function (theme) { return ({
    description: {
        color: theme.palette.text.primary,
        width: "100%",
    },
    heading: {
        flexBasis: "33.33%",
        flexShrink: 0,
        fontSize: theme.typography.pxToRem(15),
    },
    root: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(3),
        width: "100%",
    },
    secondaryHeading: {
        color: theme.palette.text.secondary,
        fontSize: theme.typography.pxToRem(15),
    },
}); };
var Methods = /** @class */ (function (_super) {
    __extends(Methods, _super);
    function Methods() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Methods.prototype.render = function () {
        var _this = this;
        var _a = this.props, schema = _a.schema, classes = _a.classes, uiSchema = _a.uiSchema, disableTransitionProps = _a.disableTransitionProps, onMethodToggle = _a.onMethodToggle;
        if (!schema) {
            return null;
        }
        var methods = schema.methods;
        var methodsExist = methods && methods.length > 0;
        if (!schema || !schema.methods || !methodsExist) {
            return null;
        }
        return (react_1.default.createElement("div", { className: classes.root },
            react_1.default.createElement(Typography_1.default, { variant: "h3", gutterBottom: true }, "Methods"),
            schema.methods.map(function (method, i) { return (react_1.default.createElement(ExpansionPanel_1.default, { id: method.name, key: i + method.name, TransitionProps: { unmountOnExit: disableTransitionProps ? false : true }, onChange: function (__, expanded) {
                    if (onMethodToggle) {
                        onMethodToggle(method.name, expanded);
                    }
                }, defaultExpanded: uiSchema &&
                    uiSchema.methods &&
                    (uiSchema.methods["ui:defaultExpanded"] === true ||
                        (uiSchema.methods["ui:defaultExpanded"] && uiSchema.methods["ui:defaultExpanded"][method.name] === true)) },
                react_1.default.createElement(ExpansionPanelSummary_1.default, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
                    react_1.default.createElement(Typography_1.default, { key: method.name, className: classes.heading }, method.name),
                    react_1.default.createElement(Typography_1.default, { key: method.summary, className: classes.secondaryHeading }, method.summary)),
                method.tags && method.tags.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "tags" },
                        react_1.default.createElement(Tags_1.default, { tags: method.tags })),
                method.description &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "description" },
                        react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: uiSchema, source: method.description, className: classes.description })),
                method.headers && method.headers.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "headers-title" },
                        react_1.default.createElement(Typography_1.default, { variant: "h5" }, "Headers")),
                method.headers &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "headers" },
                        react_1.default.createElement(Headers_1.default, { headers: method.headers, uiSchema: uiSchema })),
                method.params && method.params.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "params-title" },
                        react_1.default.createElement(Typography_1.default, { variant: "h5" }, "Params")),
                method.params &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "params" },
                        react_1.default.createElement(Params_1.default, { params: method.params, uiSchema: uiSchema })),
                method.result &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "result-title" },
                        react_1.default.createElement(Typography_1.default, { variant: "h5" }, "Result")),
                method.result && method.result.schema &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "result" },
                        react_1.default.createElement(ContentDescriptor_1.default, { contentDescriptor: method.result, hideRequired: true, uiSchema: uiSchema })),
                method.errors && method.errors.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "errors" },
                        react_1.default.createElement(Errors_1.default, { errors: method.errors, reactJsonOptions: _this.props.reactJsonOptions })),
                react_1.default.createElement(ExamplePairings_1.default, { uiSchema: uiSchema, examples: method.examples, method: method, reactJsonOptions: _this.props.reactJsonOptions }),
                method.links && method.links.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "links-title" },
                        react_1.default.createElement(Typography_1.default, { variant: "h5" }, "Links")),
                method.links && method.links.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "links" },
                        react_1.default.createElement(Links_1.default, { links: method.links, reactJsonOptions: _this.props.reactJsonOptions })),
                _this.props.methodPlugins && _this.props.methodPlugins.length > 0 &&
                    react_1.default.createElement(ExpansionPanelDetails_1.default, { key: "method-plugins" }, _this.props.methodPlugins.map(function (CompDef) {
                        return (react_1.default.createElement(CompDef, { openrpcMethodObject: method }));
                    })))); })));
    };
    return Methods;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(Methods);
