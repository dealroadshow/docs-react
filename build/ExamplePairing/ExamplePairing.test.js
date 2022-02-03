"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var ExamplePairing_1 = __importDefault(require("./ExamplePairing"));
var examples_1 = __importDefault(require("@open-rpc/examples"));
var json_schema_ref_parser_1 = __importDefault(require("json-schema-ref-parser"));
it("renders handles no method", function () { return __awaiter(void 0, void 0, void 0, function () {
    var div;
    return __generator(this, function (_a) {
        div = document.createElement("div");
        react_dom_1.default.render(react_1.default.createElement(ExamplePairing_1.default, { methodName: undefined, examplePairing: {} }), div);
        expect(div.innerHTML).toBe("");
        react_dom_1.default.unmountComponentAtNode(div);
        return [2 /*return*/];
    });
}); });
it("renders handles no method examples", function () { return __awaiter(void 0, void 0, void 0, function () {
    var div;
    return __generator(this, function (_a) {
        div = document.createElement("div");
        react_dom_1.default.render(react_1.default.createElement(ExamplePairing_1.default, { methodName: "foo" }), div);
        expect(div.innerHTML).toBe("");
        react_dom_1.default.unmountComponentAtNode(div);
        return [2 /*return*/];
    });
}); });
it("renders examples", function () { return __awaiter(void 0, void 0, void 0, function () {
    var div, simpleMath;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                div = document.createElement("div");
                return [4 /*yield*/, json_schema_ref_parser_1.default.dereference(examples_1.default.simpleMath)];
            case 1:
                simpleMath = _a.sent();
                react_dom_1.default.render(react_1.default.createElement(ExamplePairing_1.default, { methodName: simpleMath.methods[0].name, examplePairing: simpleMath.methods[0].examples && simpleMath.methods[0].examples[0] }), div);
                expect(div.innerHTML.includes("2")).toBe(true);
                expect(div.innerHTML.includes("4")).toBe(true);
                react_dom_1.default.unmountComponentAtNode(div);
                return [2 /*return*/];
        }
    });
}); });
it("renders examples with params by-name", function () { return __awaiter(void 0, void 0, void 0, function () {
    var div, method;
    return __generator(this, function (_a) {
        div = document.createElement("div");
        method = {
            examples: [
                {
                    name: "fooExample",
                    params: [
                        {
                            name: "foo",
                            value: "bar",
                        },
                    ],
                    result: {
                        name: "exampleResultThing",
                        value: "potato",
                    },
                },
            ],
            name: "myMethod",
            paramStructure: "by-name",
            params: [{
                    name: "foo",
                    schema: {
                        type: "string",
                    },
                }],
            result: {
                name: "resultThing",
                schema: {
                    type: "string",
                },
            },
        };
        react_dom_1.default.render(react_1.default.createElement(ExamplePairing_1.default, { methodName: method.name, examplePairing: method.examples && method.examples[0], paramStructure: method.paramStructure || "by-position" }), div);
        expect(div.innerHTML.includes("foo")).toBe(true);
        expect(div.innerHTML.includes("bar")).toBe(true);
        react_dom_1.default.unmountComponentAtNode(div);
        return [2 /*return*/];
    });
}); });
