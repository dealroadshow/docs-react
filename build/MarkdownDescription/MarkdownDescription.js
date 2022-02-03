"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_syntax_highlighter_1 = require("react-syntax-highlighter");
var prism_1 = require("react-syntax-highlighter/dist/cjs/styles/prism");
var react_markdown_1 = __importDefault(require("react-markdown"));
var MarkdownDescription = function (_a) {
    var source = _a.source, className = _a.className, uiSchema = _a.uiSchema;
    return (react_1.default.createElement(react_markdown_1.default, { renderers: {
            code: function (_a) {
                var language = _a.language, value = _a.value;
                if (!value) {
                    return react_1.default.createElement("pre", null,
                        react_1.default.createElement("code", null));
                }
                return react_1.default.createElement(react_syntax_highlighter_1.Prism, { style: uiSchema && uiSchema.appBar && uiSchema.appBar["ui:darkMode"] ? prism_1.materialDark : prism_1.materialLight, language: language, children: value });
            },
        }, source: source, className: className }));
};
exports.default = MarkdownDescription;
