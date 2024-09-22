"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spinner = void 0;
const react_1 = require("react");
const Spinners_api_1 = require("./Api/Spinners.api");
const PopoverStyles = __importStar(require("../Style/Spinners/Main"));
class Spinner {
    constructor(Type) {
        this.Type = (0, Spinners_api_1.TypeofPopover)(Type);
        this.css = this.getStyle();
    }
    getStyle() {
        if (!this.Type) {
            throw new Error('Error: Invalid type');
        }
        const AllTypes = Object.keys(Spinners_api_1.PopoverType).filter(key => isNaN(Number(key)));
        if (AllTypes.includes(this.Type)) {
            const style = PopoverStyles[this.Type];
            if (style) {
                return style;
            }
            else {
                throw new Error(`Invalid type ${this.Type}`);
            }
        }
        else {
            throw new Error('Error: Invalid type');
        }
    }
    AddStyle(customStyle) {
        this.css = Object.assign(Object.assign({}, this.css), customStyle);
    }
    SetStyle(customStyle) {
        this.css = Object.assign({}, customStyle);
    }
    RemoveStyle(stylesToRemove) {
        stylesToRemove.forEach(style => {
            delete this.css[style];
        });
    }
    Build() {
        const css = this.css;
        const keyframes = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
        const styleSheet = document.styleSheets[0];
        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);
        const animationStyle = {
            animation: 'spin 1s linear infinite'
        };
        return function () {
            return (0, react_1.createElement)('div', { style: Object.assign(Object.assign({}, css), animationStyle) });
        };
    }
}
exports.Spinner = Spinner;
