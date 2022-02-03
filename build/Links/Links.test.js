"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Links_1 = __importDefault(require("./Links"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty links", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, { links: [] }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a link method for a given schema link", function () {
    var div = document.createElement("div");
    var link = {
        method: "get_user_address",
    };
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, { links: [link] }), div);
    expect(div.innerHTML.includes("get_user_address")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a link params for a given schema link", function () {
    var div = document.createElement("div");
    var link = {
        params: {
            foo: "$params.id",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, { links: [link] }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("$params.id")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a link description for a given schema link", function () {
    var div = document.createElement("div");
    var link = {
        description: "my description",
    };
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, { links: [link] }), div);
    expect(div.innerHTML.includes("my description")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a link server url for a given schema link", function () {
    var div = document.createElement("div");
    var link = {
        server: {
            url: "http://localhost:9210",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, { links: [link] }), div);
    expect(div.innerHTML.includes("localhost:9210")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders a link server url for a given schema link", function () {
    var div = document.createElement("div");
    var link = {
        server: {
            url: "http://localhost:9210",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Links_1.default, { links: [link] }), div);
    expect(div.innerHTML.includes("localhost:9210")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
