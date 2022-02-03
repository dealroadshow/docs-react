"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var ContentDescriptor_1 = __importDefault(require("./ContentDescriptor"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(ContentDescriptor_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(ContentDescriptor_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema", function () {
    var div = document.createElement("div");
    var emptyContentDescriptor = {};
    react_dom_1.default.render(react_1.default.createElement(ContentDescriptor_1.default, { contentDescriptor: emptyContentDescriptor }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a name", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(ContentDescriptor_1.default, { contentDescriptor: { name: "foo", schema: {} }, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
