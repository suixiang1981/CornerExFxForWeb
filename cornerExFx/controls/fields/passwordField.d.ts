import { StringField } from "./stringField";
export declare class PasswordField extends StringField {
    private static isPasswordFieldCSSLoaded;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    private fieldSeeDiv;
    protected loadHTML(): void;
}
