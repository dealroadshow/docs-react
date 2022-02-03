"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Documentation_1 = __importDefault(require("./Documentation"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Documentation_1.default, { schema: {} }), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders without crashing with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Documentation_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("render contentDescriptors", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Documentation_1.default, { schema: { components: { contentDescriptors: { Foo: { name: "foo", schema: true } } } } }), div);
    expect(div.innerHTML.includes("ContentDescriptors")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("doesnt render contentDescriptors if uiSchema contentDescriptors hidden is passed", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Documentation_1.default, { schema: { components: { contentDescriptors: { Foo: { name: "foo", schema: true } } } }, uiSchema: { contentDescriptors: { "ui:hidden": true } } }), div);
    expect(div.innerHTML.includes("ContentDescriptors")).toBe(false);
    react_dom_1.default.unmountComponentAtNode(div);
});
