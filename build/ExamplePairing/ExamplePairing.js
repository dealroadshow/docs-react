"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var core_1 = require("@material-ui/core");
var react_json_view_1 = __importDefault(require("react-json-view"));
var lodash_1 = __importDefault(require("lodash"));
var MarkdownDescription_1 = __importDefault(require("../MarkdownDescription/MarkdownDescription"));
var styles = function (theme) { return ({
    description: {
        color: theme.palette.text.primary,
    },
}); };
var ExamplePairing = /** @class */ (function (_super) {
    __extends(ExamplePairing, _super);
    function ExamplePairing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExamplePairing.prototype.render = function () {
        var _a = this.props, examplePairing = _a.examplePairing, paramStructure = _a.paramStructure, classes = _a.classes, methodName = _a.methodName, uiSchema = _a.uiSchema;
        if (lodash_1.default.isUndefined(examplePairing)) {
            return null;
        }
        if (lodash_1.default.isUndefined(methodName)) {
            return null;
        }
        var params = examplePairing.params;
        return (react_1.default.createElement(Grid_1.default, { container: true, spacing: 10 },
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12 },
                react_1.default.createElement(MarkdownDescription_1.default, { uiSchema: uiSchema, source: examplePairing.description, className: classes.description })),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6 },
                react_1.default.createElement(core_1.Card, null,
                    react_1.default.createElement(core_1.CardHeader, { title: "Request" }),
                    react_1.default.createElement(core_1.CardContent, null, examplePairing.params && react_1.default.createElement(react_json_view_1.default, __assign({ name: false, src: {
                            id: 1,
                            jsonrpc: "2.0",
                            method: methodName,
                            params: params,
                        } }, this.props.reactJsonOptions))))),
            react_1.default.createElement(Grid_1.default, { item: true, xs: 12, sm: 6 },
                react_1.default.createElement(core_1.CardHeader, { title: "Result" }),
                react_1.default.createElement(core_1.Card, null,
                    react_1.default.createElement(core_1.CardContent, null, examplePairing.result && react_1.default.createElement(react_json_view_1.default, __assign({ name: false, src: {
                            id: 1,
                            jsonrpc: "2.0",
                            result: examplePairing.result.value,
                        } }, this.props.reactJsonOptions)))))));
    };
    return ExamplePairing;
}(react_1.Component));
exports.default = core_1.withStyles(styles)(ExamplePairing);
