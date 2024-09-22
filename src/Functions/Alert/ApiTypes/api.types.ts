/**
 * Enum representing different types of buttons.
 * @enum {number}
 */
enum AlertType {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Dark = 7
}


interface IAlert {
    type: AlertType;
}


/**
 * Function to get the string representation of a ButtonType enum value.
 * @param {string | number} type - Tشhe type to convert to a string.
 * @returns {string | number} - The string representation of the type.
 * @throws {Error} - If the type is not found in the ButtonType enum.
 */


function TypeofAlert(type: string | number): string | number {
    if (typeof type === 'number') {
        for (const key in AlertType) {
            if (AlertType[key as keyof typeof AlertType] === type && typeof key === 'string') {
                return key;
            }
        }
        throw new Error('Error: Number type not found in AlertType enum');
    } else if (typeof type === 'string') {
        if (AlertType[type as keyof typeof AlertType] !== undefined) {
            return AlertType[type as keyof typeof AlertType];
        } else {
            throw new Error('Error: String type not found in AlertType enum');
        }
    } else {
        throw new Error('Error: Invalid type');
    }
}


export { TypeofAlert, AlertType };
