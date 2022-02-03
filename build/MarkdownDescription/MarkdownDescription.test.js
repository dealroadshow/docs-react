"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var MarkdownDescription_1 = __importDefault(require("./MarkdownDescription"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: {} }), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a description", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: {}, source: "foo" }), div);
    expect(div.innerHTML).toContain("foo");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a description with syntax highlighting", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: {}, source: "```javascript\n\nconst foo = 'bar';\n\n```" }), div);
    expect(div.innerHTML).toContain("language-javascript");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a description with darkmode syntax highlighting", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: { appBar: { "ui:darkMode": true } }, source: "```javascript\n\nconst foo = 'bar';\n\n```" }), div);
    expect(div.innerHTML).toContain("language-javascript");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a description that errors", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: {}, source: "```" }), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
