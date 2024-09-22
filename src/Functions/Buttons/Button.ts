import React from 'react';
import { createElement } from 'react';
import { TypeofButton, ButtonType as ButtonsType } from "./Api/_Api.buttons";
/**
 * @param { number } Type - The type of the button
 * @param { string } text - The text of the button
 */

import * as ButtonStyles from "../Style/Buttons/Main";

interface IButton {
    Type: string | number;
    css: { [key: string]: string };
}

class Button implements IButton {
    Type: string | number;
    css: { [key: string]: string };
    public build: () => JSX.Element;

    constructor(Type: string | number) {
        this.Type = TypeofButton(Type);
        this.css = this.getStyle();
    }

    /**
     * Retrieves the style for the button based on its type.
     * @returns { { [key: string]: string } } - The style object for the button.
     * @throws Will throw an error if the type is invalid.
     */
    private getStyle(): { [key: string]: string } {
        if (!this.Type) {
            throw new Error('Error: Invalid type');
        }
        const AllTypes = Object.keys(ButtonsType).filter(key => isNaN(Number(key)));
        if (AllTypes.includes(this.Type as string)) {
            const style = ButtonStyles[this.Type as keyof typeof ButtonStyles];
            if (style) {
                return style;
            } else {
                throw new Error(`Invalid type ${this.Type}`);
            }
        } else {
            throw new Error('Error: Invalid type');
        }
    }

    /**
     * Adds custom styles to the button.
     * @param { { [key: string]: string } } customStyle - The custom styles to add.
     */
    public AddStyle(customStyle: { [key: string]: string }) {
        this.css = { ...this.css, ...customStyle };
    }

    /**
     * Sets the style of the button, replacing any existing styles.
     * @param { { [key: string]: string } } customStyle - The custom styles to set.
     */
    public SetStyle(customStyle: { [key: string]: string }) {
        this.css = { ...customStyle };
    }

    /**
     * Removes specific styles from the button.
     * @param { string[] } stylesToRemove - The styles to remove.
     */
    public RemoveStyle(stylesToRemove: string[]) {
        stylesToRemove.forEach(style => {
            delete this.css[style];
        });
    }

    /**
     * Builds the button component.
     * @param { string } text - The text of the button.
     * @returns { JSX.Element } - The button component.
     */
    public Build() {
        const css = this.css;
        return function ({ text }: { text: string }) {
            return createElement(
                'button',
                { style: css },
                text
            );
        }
    }
}

export { Button };