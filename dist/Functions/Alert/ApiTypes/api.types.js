"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlertType = void 0;
exports.TypeofAlert = TypeofAlert;
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Primary"] = 1] = "Primary";
    AlertType[AlertType["Secondary"] = 2] = "Secondary";
    AlertType[AlertType["Success"] = 3] = "Success";
    AlertType[AlertType["Danger"] = 4] = "Danger";
    AlertType[AlertType["Warning"] = 5] = "Warning";
    AlertType[AlertType["Info"] = 6] = "Info";
    AlertType[AlertType["Dark"] = 7] = "Dark";
})(AlertType || (exports.AlertType = AlertType = {}));
function TypeofAlert(type) {
    if (typeof type === 'number') {
        for (const key in AlertType) {
            if (AlertType[key] === type && typeof key === 'string') {
                return key;
            }
        }
        throw new Error('Error: Number type not found in AlertType enum');
    }
    else if (typeof type === 'string') {
        if (AlertType[type] !== undefined) {
            return AlertType[type];
        }
        else {
            throw new Error('Error: String type not found in AlertType enum');
        }
    }
    else {
        throw new Error('Error: Invalid type');
    }
}
