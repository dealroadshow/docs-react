"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Info_1 = __importDefault(require("./Info"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: {} }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema info", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: { info: {} } }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders an info.title for a given schema", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            title: "foo",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders an info.version for a given schema", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            version: "1.0.0-rc0",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("1.0.0-rc0")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders an info.description for a given schema", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            description: "my long verbose description",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("my long verbose description")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders an info terms of service for a given schema", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            termsOfService: "http://open-rpc.org",
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes('"http://open-rpc.org"')).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders an info contact for a given schema", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            contact: {
                email: "foo@example.com",
                name: "OpenRPC Team",
                url: "http://open-rpc.org",
            },
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("OpenRPC Team")).toBe(true);
    expect(div.innerHTML.includes('"http://open-rpc.org"')).toBe(true);
    expect(div.innerHTML.includes("mailto:foo@example.com")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders an info license for a given schema", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            license: {
                name: "Apache 2.0",
                url: "http://www.apache.org",
            },
        },
    };
    react_dom_1.default.render(react_1.default.createElement(Info_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("http://www.apache.org")).toBe(true);
    expect(div.innerHTML.includes("Apache 2.0")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
