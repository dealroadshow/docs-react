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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Info_1 = __importDefault(require("./Info/Info"));
var Servers_1 = __importDefault(require("./Servers/Servers"));
var Methods_1 = __importDefault(require("./Methods/Methods"));
var ContentDescriptors_1 = __importDefault(require("./ContentDescriptors/ContentDescriptors"));
var Documentation = /** @class */ (function (_super) {
    __extends(Documentation, _super);
    function Documentation(props) {
        return _super.call(this, props) || this;
    }
    Documentation.prototype.render = function () {
        var _a = this.props, schema = _a.schema, uiSchema = _a.uiSchema, reactJsonOptions = _a.reactJsonOptions, onMethodToggle = _a.onMethodToggle;
        if (!schema) {
            return null;
        }
        var shouldShowContentDescriptors = !(uiSchema && uiSchema.contentDescriptors && uiSchema.contentDescriptors["ui:hidden"] === true);
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(Info_1.default, { schema: schema }),
            react_1.default.createElement(Servers_1.default, { servers: schema.servers, reactJsonOptions: reactJsonOptions }),
            react_1.default.createElement(Methods_1.default, { onMethodToggle: onMethodToggle, schema: schema, uiSchema: uiSchema, reactJsonOptions: reactJsonOptions, methodPlugins: this.props.methodPlugins }),
            shouldShowContentDescriptors &&
                react_1.default.createElement(ContentDescriptors_1.default, { schema: schema, uiSchema: uiSchema })));
    };
    return Documentation;
}(react_1.default.Component));
exports.default = Documentation;
