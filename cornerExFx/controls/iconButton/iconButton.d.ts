import { Button } from "../button/button";
export declare class IconButton extends Button {
    protected buttonIcon: HTMLImageElement;
    protected getHtmlPath(): string;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    protected _iconMargin: number;
    iconMargin: number;
    protected _iconSize: number;
    iconSize: number;
    protected _icon: string;
    icon: string;
    protected _iconAlign: IconAlign;
    iconAlign: IconAlign;
    protected _labelAlign: LabelAlign;
    labelAlign: LabelAlign;
    private drawIcon;
    protected setHeight(newValue: number): void;
}
export declare enum IconAlign {
    Left = 0,
    Right = 1,
    Top = 2,
    Center = 3
}
export declare enum LabelAlign {
    Auto = 0,
    Center = 1
}
