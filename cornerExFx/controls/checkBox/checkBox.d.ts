import { Button } from "../button/button";
export declare class CheckBox extends Button {
    private checkBox;
    private checkBoxLabel;
    private _value;
    private isInit;
    protected getHtmlPath(): string;
    protected getCSSPath(): string;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    protected click(x?: number, y?: number): void;
    readonly height: number;
    label: string;
    value: CheckBoxValue;
    protected draw(): void;
}
export declare enum CheckBoxValue {
    Unchecked = 0,
    Indeterminate = 1,
    Checked = 2
}
