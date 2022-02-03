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
var ContentDescriptor_1 = __importDefault(require("../ContentDescriptor/ContentDescriptor"));
var core_1 = require("@material-ui/core");
var ContentDescriptors = /** @class */ (function (_super) {
    __extends(ContentDescriptors, _super);
    function ContentDescriptors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContentDescriptors.prototype.render = function () {
        var _this = this;
        var _a = this.props, schema = _a.schema, disableTransitionProps = _a.disableTransitionProps;
        if (!schema || !schema.components || !schema.components.contentDescriptors) {
            return null;
        }
        var entries = Object.entries(schema.components.contentDescriptors);
        if (entries.length === 0) {
            return null;
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(core_1.Typography, { variant: "h3", gutterBottom: true }, "ContentDescriptors"),
            entries.map(function (_a) {
                var key = _a[0], val = _a[1];
                return react_1.default.createElement(ContentDescriptor_1.default, { key: key, contentDescriptor: val, disableTransitionProps: disableTransitionProps, uiSchema: _this.props.uiSchema, hideRequired: true });
            })));
    };
    return ContentDescriptors;
}(react_1.Component));
exports.default = ContentDescriptors;
