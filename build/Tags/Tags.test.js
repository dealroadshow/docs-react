"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Tags_1 = __importDefault(require("./Tags"));
it("renders empty with empty tags", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Tags_1.default, { tags: [] }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema tags", function () {
    var div = document.createElement("div");
    var tags = [
        {
            name: "salad",
        },
        {
            name: "mytag",
        },
    ];
    react_dom_1.default.render(react_1.default.createElement(Tags_1.default, { tags: tags }), div);
    expect(div.innerHTML.includes("salad")).toBe(true);
    expect(div.innerHTML.includes("mytag")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
