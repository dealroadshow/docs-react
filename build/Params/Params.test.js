"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Params_1 = __importDefault(require("./Params"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Params_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Params_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty params", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Params_1.default, { params: [] }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders params", function () {
    var div = document.createElement("div");
    var params = [
        {
            description: "tags to filter by",
            name: "tags",
            schema: {
                type: "string",
            },
        },
    ];
    react_dom_1.default.render(react_1.default.createElement(Params_1.default, { params: params, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("tags")).toBe(true);
    expect(div.innerHTML.includes("tags to filter by")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
