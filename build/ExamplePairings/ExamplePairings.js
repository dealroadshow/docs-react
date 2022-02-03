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
var ExamplePairing_1 = __importDefault(require("../ExamplePairing/ExamplePairing"));
var core_1 = require("@material-ui/core");
var getExamplesFromMethod = function (method) {
    if (!method) {
        return [];
    }
    if (!method.params) {
        return [];
    }
    var examples = [];
    method.params.forEach(function (param, index) {
        if (param.schema && param.schema.examples && param.schema.examples.length > 0) {
            param.schema.examples.forEach(function (ex, i) {
                if (!examples[i]) {
                    examples.push({
                        name: "generated-example",
                        params: [
                            {
                                name: param.name,
                                value: ex,
                            },
                        ],
                        result: {
                            name: "example-result",
                            value: null,
                        },
                    });
                }
                else {
                    examples[i].params.push({
                        name: param.name,
                        value: ex,
                    });
                }
            });
        }
    });
    var methodResult = method.result;
    if (methodResult && methodResult.schema && methodResult.schema.examples && methodResult.schema.examples.length > 0) {
        methodResult.schema.examples.forEach(function (ex, i) {
            if (!examples[i]) {
                examples.push({
                    name: "generated-example",
                    params: [],
                    result: {
                        name: methodResult.name,
                        value: ex,
                    },
                });
            }
            else {
                examples[i].result = {
                    name: methodResult.name,
                    value: ex,
                };
            }
        });
    }
    return examples;
};
var ExamplePairings = /** @class */ (function (_super) {
    __extends(ExamplePairings, _super);
    function ExamplePairings(props) {
        var _this = _super.call(this, props) || this;
        _this.handleClickListItem = function (event) {
            _this.setState({
                anchorEl: event.currentTarget,
            });
        };
        _this.handleMenuItemClick = function (event, index) {
            _this.setState({ selectedIndex: index, anchorEl: null });
        };
        _this.handleClose = function () {
            _this.setState({ anchorEl: null });
        };
        _this.state = {
            anchorEl: null,
            selectedIndex: 0,
        };
        return _this;
    }
    ExamplePairings.prototype.componentWillMount = function () {
        if (!this.props || !this.props.examples) {
            return;
        }
        this.setState({
            currentExample: this.props.examples[0],
        });
    };
    ExamplePairings.prototype.render = function () {
        var _this = this;
        var examples = this.props.examples;
        var _a = this.props, method = _a.method, uiSchema = _a.uiSchema;
        var anchorEl = this.state.anchorEl;
        examples = examples || getExamplesFromMethod(method);
        if (!examples || examples.length === 0) {
            return null;
        }
        return (react_1.default.createElement(core_1.ExpansionPanelDetails, { key: "examples" },
            react_1.default.createElement(core_1.Grid, { container: true },
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.Typography, { variant: "h5" }, "Examples")),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
                    react_1.default.createElement(core_1.List, { component: "nav" },
                        react_1.default.createElement(core_1.ListItem, { button: true, "aria-haspopup": "true", "aria-controls": "menu-menu", "aria-label": "Method Examples", onClick: this.handleClickListItem },
                            react_1.default.createElement(core_1.ListItemText, { primary: examples[this.state.selectedIndex].name, secondary: examples[this.state.selectedIndex].summary })),
                        react_1.default.createElement(core_1.Menu, { id: "menu-menu", anchorEl: anchorEl, open: Boolean(anchorEl), onClose: this.handleClose }, examples.map(function (example, index) { return (react_1.default.createElement(core_1.MenuItem, { key: example.name, selected: index === _this.state.selectedIndex, onClick: function (event) { return _this.handleMenuItemClick(event, index); } }, example.name)); })))),
                react_1.default.createElement(core_1.Grid, { item: true, xs: 12 }, examples &&
                    react_1.default.createElement(ExamplePairing_1.default, { uiSchema: uiSchema, paramStructure: this.props.method && this.props.method.paramStructure, examplePairing: examples[this.state.selectedIndex], methodName: this.props.method && this.props.method.name, reactJsonOptions: this.props.reactJsonOptions })))));
    };
    return ExamplePairings;
}(react_1.Component));
exports.default = ExamplePairings;
