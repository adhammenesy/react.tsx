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
exports.Button = void 0;
const react_1 = require("react");
const _Api_buttons_1 = require("./Api/_Api.buttons");
const ButtonStyles = __importStar(require("../Style/Buttons/Main"));
class Button {
    constructor(Type) {
        this.Type = (0, _Api_buttons_1.TypeofButton)(Type);
        this.css = this.getStyle();
    }
    getStyle() {
        if (!this.Type) {
            throw new Error('Error: Invalid type');
        }
        const AllTypes = Object.keys(_Api_buttons_1.ButtonType).filter(key => isNaN(Number(key)));
        if (AllTypes.includes(this.Type)) {
            const style = ButtonStyles[this.Type];
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
        return function ({ text }) {
            return (0, react_1.createElement)('button', { style: css }, text);
        };
    }
}
exports.Button = Button;
