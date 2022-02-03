"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Servers_1 = __importDefault(require("./Servers"));
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Servers_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with no servers", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Servers_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty servers", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Servers_1.default, { servers: [] }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema servers", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Servers_1.default, { servers: [] }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema servers", function () {
    var div = document.createElement("div");
    var servers = [
        {
            description: "foobar",
            name: "Pet Store",
            url: "http://petstore.openrpc.io/api",
        },
    ];
    react_dom_1.default.render(react_1.default.createElement(Servers_1.default, { servers: servers }), div);
    expect(div.innerHTML.includes("Pet Store")).toBe(true);
    expect(div.innerHTML.includes("http://petstore.openrpc.io/api")).toBe(true);
    expect(div.innerHTML.includes("foobar")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema servers with variables", function () {
    var div = document.createElement("div");
    var servers = [
        {
            description: "foobar",
            name: "Pet Store",
            url: "http://{username}.open-rpc.org:{port}/{basePath}/{exampleName}",
            variables: {
                basePath: {
                    default: "jsonrpc",
                },
                exampleName: {
                    default: "petstore",
                },
                port: {
                    default: "443",
                    enum: [
                        "8545",
                        "443",
                    ],
                },
                username: {
                    default: "demo",
                    description: "this is applied to the url as the subdomain",
                },
            },
        },
    ];
    react_dom_1.default.render(react_1.default.createElement(Servers_1.default, { servers: servers }), div);
    expect(div.innerHTML.includes("open-rpc.org")).toBe(true);
    expect(div.innerHTML.includes("petstore")).toBe(true);
    expect(div.innerHTML.includes("jsonrpc")).toBe(true);
    expect(div.innerHTML.includes("443")).toBe(true);
    expect(div.innerHTML.includes("8545")).toBe(true);
    expect(div.innerHTML.includes("demo")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
