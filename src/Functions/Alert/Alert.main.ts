import React from 'react';
import { createElement } from 'react';
import { TypeofAlert, AlertType as AlertsType } from "./ApiTypes/api.types";
/**
 * @param { number } Type - The type of the alert
 * @param { string } text - The text of the alert
 */

import * as AlertStyles from "../Style/Alert/Main";

interface IAlert {
    Type: string | number;
    css: { [key: string]: string };
}

class Alert implements IAlert {
    Type: string | number;
    css: { [key: string]: string };
    public build: () => JSX.Element;

    constructor(Type: string | number) {
        this.Type = TypeofAlert(Type);
        this.css = this.getStyle();
    }

    /**
     * Retrieves the style for the alert based on its type.
     * @returns { { [key: string]: string } } - The style object for the alert.
     * @throws Will throw an error if the type is invalid.
     */
    private getStyle(): { [key: string]: string } {
        if (!this.Type) {
            throw new Error('Error: Invalid type');
        }
        const AllTypes = Object.keys(AlertsType).filter(key => isNaN(Number(key)));
        if (AllTypes.includes(this.Type as string)) {
            const style = AlertStyles[this.Type as keyof typeof AlertStyles];
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
     * Adds custom styles to the alert.
     * @param { { [key: string]: string } } customStyle - The custom styles to add.
     */
    public AddStyle(customStyle: { [key: string]: string }) {
        this.css = { ...this.css, ...customStyle };
    }

    /**
     * Sets the style of the alert, replacing any existing styles.
     * @param { { [key: string]: string } } customStyle - The custom styles to set.
     */
    public SetStyle(customStyle: { [key: string]: string }) {
        this.css = { ...customStyle };
    }

    /**
     * Removes specific styles from the alert.
     * @param { string[] } stylesToRemove - The styles to remove.
     */
    public RemoveStyle(stylesToRemove: string[]) {
        stylesToRemove.forEach(style => {
            delete this.css[style];
        });
    }

    /**
     * Builds the alert component.
     * @param { string } text - The text of the alert.
     * @param { JSX.Element } icon - The icon of the alert.
     * @param { any } props - Additional properties for the alert.
     * @param { { [key: string]: string } } icoStyle - The style of the icon.
     * @returns { JSX.Element } - The alert component.
     */
    public Build() {
        const css = this.css;

        const DefaultIconStyle = {
            marginRight: '25px',
        }

        return function ({ text, icon, props }: { text: string, icon: JSX.Element, props: any }, icoStyle: { [key: string]: string }) {
            return createElement(
                'div',

                { style: css, ...props },
                icon ? createElement('span', { style: { ...DefaultIconStyle, ...icoStyle } }, icon) : null,
                text
            );
        }
    }
}

export { Alert };