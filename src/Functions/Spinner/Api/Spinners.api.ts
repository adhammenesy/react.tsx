/**
 * Enum representing different types of buttons.
 * @enum {number}
 */
enum PopoverType {
    spinner = 1
}

interface IButton {
    type: PopoverType;
}


/**
 * Function to get the string representation of a PopoverType enum value.
 * @param {string | number} type - The type to convert to a string.
 * @returns {string | number} - The string representation of the type.
 * @throws {Error} - If the type is not found in the PopoverType enum.
 */


function TypeofPopover(type: string | number): string | number {
    if (typeof type === 'number') {
        for (const key in PopoverType) {
            if (PopoverType[key as keyof typeof PopoverType] === type && typeof key === 'string') {
                return key;
            }
        }
        throw new Error('Error: Number type not found in PopoverType enum');
    } else if (typeof type === 'string') {
        if (PopoverType[type as keyof typeof PopoverType] !== undefined) {
            return PopoverType[type as keyof typeof PopoverType];
        } else {
            throw new Error('Error: String type not found in PopoverType enum');
        }
    } else {
        throw new Error('Error: Invalid type');
    }
}


export { TypeofPopover, PopoverType };
