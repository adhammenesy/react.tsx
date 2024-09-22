"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PopoverType = void 0;
exports.TypeofPopover = TypeofPopover;
var PopoverType;
(function (PopoverType) {
    PopoverType[PopoverType["spinner"] = 1] = "spinner";
})(PopoverType || (exports.PopoverType = PopoverType = {}));
function TypeofPopover(type) {
    if (typeof type === 'number') {
        for (const key in PopoverType) {
            if (PopoverType[key] === type && typeof key === 'string') {
                return key;
            }
        }
        throw new Error('Error: Number type not found in PopoverType enum');
    }
    else if (typeof type === 'string') {
        if (PopoverType[type] !== undefined) {
            return PopoverType[type];
        }
        else {
            throw new Error('Error: String type not found in PopoverType enum');
        }
    }
    else {
        throw new Error('Error: Invalid type');
    }
}
