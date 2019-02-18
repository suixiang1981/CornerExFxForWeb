import { Button } from "../button/button";
export declare class RadioButton extends Button {
    private radioButtonCenter;
    private radioButton;
    private radioButtonLabel;
    private static radioButtons;
    private isInit;
    protected getHtmlPath(): string;
    protected getCSSPath(): string;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    protected click(x?: number, y?: number): void;
    readonly height: number;
    label: string;
    private _selected;
    selected: boolean;
    protected draw(): void;
}
