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
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var react_markdown_1 = __importDefault(require("react-markdown"));
var styles = function (theme) { return ({
    button: {
        margin: theme.spacing(2),
    },
    chip: {
        margin: theme.spacing(2),
    },
    description: {
        color: theme.palette.text.primary,
        padding: theme.spacing(2) + "px 0 " + theme.spacing(2) + "px 0",
    },
}); };
var Info = /** @class */ (function (_super) {
    __extends(Info, _super);
    function Info() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Info.prototype.render = function () {
        var _a = this.props, schema = _a.schema, classes = _a.classes;
        if (!schema || !schema.info) {
            return null;
        }
        var info = schema.info;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            info.title && react_1.default.createElement(Typography_1.default, { variant: "h2", gutterBottom: true }, info.title),
            info.version && react_1.default.createElement(Chip_1.default, { label: info.version }),
            info.license &&
                info.license.name &&
                info.license.url &&
                react_1.default.createElement(Chip_1.default, __assign({ component: "a" }, { href: info.license.url }, { className: classes.chip, clickable: true, color: "primary", label: info.license.name })),
            info.description && react_1.default.createElement(react_markdown_1.default, { className: classes.description, source: info.description }),
            info.termsOfService &&
                react_1.default.createElement(Button_1.default, { className: classes.button, variant: "contained", href: info.termsOfService }, "Terms Of Service"),
            info.contact &&
                info.contact.url &&
                info.contact.name &&
                react_1.default.createElement(Button_1.default, { className: classes.button, variant: "contained", href: info.contact.url },
                    "Contact ",
                    info.contact.name),
            info.contact &&
                info.contact.email &&
                react_1.default.createElement(Button_1.default, { className: classes.button, variant: "contained", href: "mailto:" + info.contact.email },
                    "Email ",
                    info.contact.name)));
    };
    return Info;
}(react_1.Component));
exports.default = styles_1.withStyles(styles)(Info);
