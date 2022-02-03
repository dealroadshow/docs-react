"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var JSONSchemaFields_1 = __importDefault(require("./JSONSchemaFields"));
it("renders empty with no schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, null), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders empty with empty schema", function () {
    var div = document.createElement("div");
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: {} }), div);
    expect(div.innerHTML).toBe("");
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a schema", function () {
    var div = document.createElement("div");
    var schema = {
        /* tslint:disable */
        type: "object",
        properties: {
            name: {
                type: "string",
            },
            tag: {
                type: "string",
            },
        },
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("name")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("tag")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a schema required", function () {
    var div = document.createElement("div");
    var schema = {
        properties: {
            name: {
                type: "string",
            },
        },
        required: [
            "name",
        ],
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("true")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a schema without required", function () {
    var div = document.createElement("div");
    var schema = {
        properties: {
            name: {
                type: "string",
            },
        },
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("false")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested schema object", function () {
    var div = document.createElement("div");
    var schema = {
        properties: {
            name: {
                type: "object",
                properties: {
                    foo: {
                        type: "string"
                    }
                }
            },
        },
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("object")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a anyOf with nested objects", function () {
    var div = document.createElement("div");
    var schema = {
        anyOf: [
            {
                title: "foo",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            potato: {
                                type: "string"
                            }
                        }
                    },
                },
            },
            {
                title: "bar",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            baz: {
                                type: "string"
                            }
                        }
                    },
                },
            }
        ]
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("bar")).toBe(true);
    expect(div.innerHTML.includes("baz")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a allOf with nested objects", function () {
    var div = document.createElement("div");
    var schema = {
        allOf: [
            {
                title: "foo",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            potato: {
                                type: "string"
                            }
                        }
                    },
                },
            },
            {
                title: "bar",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            baz: {
                                type: "string"
                            }
                        }
                    },
                },
            }
        ]
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("bar")).toBe(true);
    expect(div.innerHTML.includes("baz")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a oneOf with nested objects", function () {
    var div = document.createElement("div");
    var schema = {
        oneOf: [
            {
                title: "foo",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            potato: {
                                type: "string"
                            }
                        }
                    },
                },
            },
            {
                title: "bar",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            baz: {
                                type: "string"
                            }
                        }
                    },
                },
            }
        ]
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("bar")).toBe(true);
    expect(div.innerHTML.includes("baz")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested arrays of objects", function () {
    var div = document.createElement("div");
    var schema = {
        title: "MyPotatoObject",
        type: "array",
        items: [
            {
                title: "foo",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            potato: {
                                type: "string"
                            }
                        }
                    },
                },
            },
            {
                title: "bar",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            baz: {
                                type: "string"
                            }
                        }
                    },
                },
            }
        ]
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("bar")).toBe(true);
    expect(div.innerHTML.includes("baz")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("MyPotatoObject")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested arrays of object", function () {
    var div = document.createElement("div");
    var schema = {
        title: "MyPotatoObject",
        type: "array",
        items: {
            title: "foo",
            properties: {
                name: {
                    type: "object",
                    properties: {
                        potato: {
                            type: "string"
                        }
                    }
                },
            },
        }
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("object")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("MyPotatoObject")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested arrays of object with name passed explicitly", function () {
    var div = document.createElement("div");
    var schema = {
        type: "array",
        items: {
            title: "foo",
            properties: {
                name: {
                    type: "object",
                    properties: {
                        potato: {
                            type: "string"
                        }
                    }
                },
            },
        }
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema, name: "My Name" }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("object")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("My Name")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested arrays of objects with name passed explicitly", function () {
    var div = document.createElement("div");
    var schema = {
        type: "array",
        items: [
            {
                title: "foo",
                properties: {
                    name: {
                        type: "object",
                        properties: {
                            potato: {
                                type: "string"
                            }
                        }
                    },
                },
            }
        ]
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema, name: "My Name" }), div);
    expect(div.innerHTML.includes("foo")).toBe(true);
    expect(div.innerHTML.includes("object")).toBe(true);
    expect(div.innerHTML.includes("potato")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("My Name")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
it("renders with a nested oneOf with nested allOf", function () {
    var div = document.createElement("div");
    var schema = {
        title: "MyPotatoObject",
        oneOf: [
            {
                title: "Apple",
                allOf: [
                    {
                        title: "Banana",
                        type: "string"
                    },
                    {
                        title: "Pear",
                        type: "string"
                    },
                ]
            }
        ]
    };
    react_dom_1.default.render(react_1.default.createElement(JSONSchemaFields_1.default, { schema: schema }), div);
    expect(div.innerHTML.includes("MyPotatoObject")).toBe(true);
    expect(div.innerHTML.includes("Apple")).toBe(true);
    expect(div.innerHTML.includes("Banana")).toBe(true);
    expect(div.innerHTML.includes("string")).toBe(true);
    expect(div.innerHTML.includes("Pear")).toBe(true);
    react_dom_1.default.unmountComponentAtNode(div);
});
