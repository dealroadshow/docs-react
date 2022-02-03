"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var JSONSchema_1 = __importDefault(require("./JSONSchema"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(JSONSchema_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema", function () {
    var div = document.createElement("div");
    var emptySchema = {};
    react_dom_1.default.render(react_1.default.createElement(JSONSchema_1.default, { schema: emptySchema }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders oneOf schema", function () {
    var div = document.createElement("div");
    var s = {
        oneOf: [
            {
                type: "string",
            },
            {
                type: "number",
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchema_1.default, { schema: s }), div);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("number")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested schema object", function () {
    var div = document.createElement("div");
    var schema = {
        properties: {
            name: {
                properties: {
                    foo: {
                        type: "string",
                    },
                },
                type: "object",
            },
        },
        type: "object",
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchema_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("object")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
