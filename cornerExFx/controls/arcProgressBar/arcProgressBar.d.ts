import { DisplayObject } from "../../core/displayObject";
export declare class ArcProgressBar extends DisplayObject {
    private canvas;
    private ctx;
    private dialBackgroundColor;
    private dialBarBackgroundColor;
    private dialBarColor;
    private isCSSReaded;
    private progressLabelDIV;
    private progressBodyDIV;
    private labelDIV;
    private labelNumSpan;
    constructor();
    private _myTimeHaneld;
    private refresh;
    private refreshFunction;
    private _marqueeHandler;
    private _marquee;
    marquee: boolean;
    protected _visible: boolean;
    visible: boolean;
    value: number;
    protected _value: number;
    label: string;
    protected _label: string;
}
