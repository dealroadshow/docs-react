"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var Methods_1 = __importDefault(require("./Methods"));
var react_2 = require("@testing-library/react");
it("renders without crashing", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, null), div);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: {} }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema methods", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: { methods: [] } }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods name", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                name: "get_pet",
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("get_pet")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("doesnt render collapsed contents", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foobarz")).toBe(false);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("doesnt render collapsed contents with empty uiSchema", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, uiSchema: {} }), div);
    expect(div.innerHTML.includes("foobarz")).toBe(false);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("doesnt render collapsed contents with empty uiSchema.methods", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, uiSchema: { methods: {} } }), div);
    expect(div.innerHTML.includes("foobarz")).toBe(false);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders collapsed contents with defaultExpanded from uiSchema", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    var uiSchema = {
        links: {},
        methods: {
            "ui:defaultExpanded": true,
        },
        params: {},
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { uiSchema: uiSchema, schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("aria-expanded=\"true\"")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders collapsed contents with defaultExpanded with the method from uiSchema", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                name: "foomethod",
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    var uiSchema = {
        links: {},
        methods: {
            "ui:defaultExpanded": {
                foomethod: true,
            },
        },
        params: {},
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { uiSchema: uiSchema, schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("aria-expanded=\"true\"")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("doesnt render collapsed contents with wrong method name and defaultExpanded with method", function () {
    var div = document.createElement("div");
    var uiSchema = {
        links: {},
        methods: {
            "ui:defaultExpanded": {
                foomethod: true,
            },
        },
        params: {},
    };
    var schema = {
        methods: [
            {
                name: "foomethod2",
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { uiSchema: uiSchema, schema: schema }), div);
    expect(div.innerHTML.includes("foobarz")).toBe(false);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders collapsed contents with disableTransitionProps", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("foobarz")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema plugin", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                name: "get_pet",
            },
        ],
    };
    var TestComponent = function (props) {
        return (react_1.default.createElement("div", null, "Plugin Test"));
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, methodPlugins: [TestComponent], disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("get_pet")).toBe(true);
    expect(div.innerHTML.includes("Plugin Test")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods summary", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                description: "verbose get_pet description",
                name: "get_pet",
                params: [],
                summary: "a short summary",
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("a short summary")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods description", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                description: "verbose get_pet description",
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("verbose get_pet description")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods params", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("foobarz")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods result", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                result: {
                    schema: {
                        properties: {
                            id: {
                                format: "int64",
                                type: "integer",
                            },
                            name: {
                                type: "string",
                            },
                            tag: {
                                type: "string",
                            },
                        },
                        required: [
                            "id",
                        ],
                    },
                },
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("Object")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods tags", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                name: "foobar",
                result: {
                    schema: {
                        properties: {
                            id: {
                                format: "int64",
                                type: "integer",
                            },
                            name: {
                                type: "string",
                            },
                            tag: {
                                type: "string",
                            },
                        },
                        required: [
                            "id",
                        ],
                    },
                },
                tags: [
                    {
                        name: "tag3",
                    },
                    {
                        name: "tag4",
                    },
                ],
            },
            {
                result: {
                    schema: {
                        properties: {
                            id: {
                                format: "int64",
                                type: "integer",
                            },
                            name: {
                                type: "string",
                            },
                            tag: {
                                type: "string",
                            },
                        },
                        required: [
                            "id",
                        ],
                    },
                },
                tags: [
                    {
                        name: "salad",
                    },
                    {
                        name: "mytag",
                    },
                ],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("Object")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods examples", function () {
    var div = document.createElement("div");
    var schema = {
        methods: [
            {
                examples: [
                    {
                        name: "foo",
                    },
                ],
            },
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders schema methods examples with schema.examples fallback", function () {
    var div = document.createElement("div");
    var schema = {
        info: {
            title: "test",
            version: "0.0.0",
        },
        methods: [
            {
                name: "test-method",
                params: [{
                        name: "testparam1",
                        schema: {
                            examples: ["bob"],
                            type: "string",
                        },
                    }],
                result: {
                    name: "test-method-result",
                    schema: {
                        examples: ["potato"],
                        type: "string",
                    },
                },
            },
        ],
        openrpc: "1.0.0",
    };
    react_dom_1.default.render(react_1.default.createElement(Methods_1.default, { schema: schema, disableTransitionProps: true }), div);
    expect(div.innerHTML.includes("potato")).toBe(true);
    expect(div.innerHTML.includes("bob")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("can call onMethodToggle when a method is clicked", function (done) {
    var schema = {
        methods: [
            {
                name: "foo",
                params: [{
                        name: "foobarz",
                    }],
            },
        ],
    };
    var getByText = react_2.render(react_1.default.createElement(Methods_1.default, { schema: schema, onMethodToggle: function (method, expanded) {
            expect(method).toEqual("foo");
            expect(expanded).toEqual(true);
            react_2.cleanup();
            done();
        } })).getByText;
    var node = getByText(schema.methods[0].name);
    react_2.fireEvent.click(node);
});
