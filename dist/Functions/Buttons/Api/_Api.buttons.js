"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonType = void 0;
exports.TypeofButton = TypeofButton;
var ButtonType;
(function (ButtonType) {
    ButtonType[ButtonType["Primary"] = 1] = "Primary";
    ButtonType[ButtonType["Secondary"] = 2] = "Secondary";
    ButtonType[ButtonType["Success"] = 3] = "Success";
    ButtonType[ButtonType["Danger"] = 4] = "Danger";
    ButtonType[ButtonType["Warning"] = 5] = "Warning";
    ButtonType[ButtonType["Info"] = 6] = "Info";
    ButtonType[ButtonType["Light"] = 7] = "Light";
    ButtonType[ButtonType["Dark"] = 8] = "Dark";
})(ButtonType || (exports.ButtonType = ButtonType = {}));
function TypeofButton(type) {
    if (typeof type === 'number') {
        for (const key in ButtonType) {
            if (ButtonType[key] === type && typeof key === 'string') {
                return key;
            }
        }
        throw new Error('Error: Number type not found in ButtonType enum');
    }
    else if (typeof type === 'string') {
        if (ButtonType[type] !== undefined) {
            return ButtonType[type];
        }
        else {
            throw new Error('Error: String type not found in ButtonType enum');
        }
    }
    else {
        throw new Error('Error: Invalid type');
    }
}
