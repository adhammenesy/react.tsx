/**
 * Enum representing different types of buttons.
 * @enum {number}
 */
enum ButtonType {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Light = 7,
    Dark = 8
}

interface IButton {
    type: ButtonType;
}


/**
 * Function to get the string representation of a ButtonType enum value.
 * @param {string | number} type - The type to convert to a string.
 * @returns {string | number} - The string representation of the type.
 * @throws {Error} - If the type is not found in the ButtonType enum.
 */


function TypeofButton(type: string | number): string | number {
    if (typeof type === 'number') {
        for (const key in ButtonType) {
            if (ButtonType[key as keyof typeof ButtonType] === type && typeof key === 'string') {
                return key;
            }
        }
        throw new Error('Error: Number type not found in ButtonType enum');
    } else if (typeof type === 'string') {
        if (ButtonType[type as keyof typeof ButtonType] !== undefined) {
            return ButtonType[type as keyof typeof ButtonType];
        } else {
            throw new Error('Error: String type not found in ButtonType enum');
        }
    } else {
        throw new Error('Error: Invalid type');
    }
}


export { TypeofButton, ButtonType };
