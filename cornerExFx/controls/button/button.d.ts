import { DisplayObject } from "../../core/displayObject";
import { MaterialDesignEmphasis } from "../../materialDesign/materialDesignsEmphasis";
export declare class Button extends DisplayObject {
    protected buttonLabel: HTMLDivElement;
    private hx;
    private hy;
    private isDown;
    protected isOver: boolean;
    private clickCancel;
    protected isButtonHalo: boolean;
    protected getHtmlPath(): string;
    protected getCSSPath(): string;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    protected click(x?: number, y?: number): void;
    private down;
    private up;
    tabIndex: number;
    protected setWidth(newValue: number): void;
    protected setHeight(newValue: number): void;
    protected _label: string;
    label: string;
    protected draw(): void;
    _emphasis: MaterialDesignEmphasis;
    emphasis: MaterialDesignEmphasis;
}
