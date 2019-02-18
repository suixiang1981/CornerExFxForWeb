import { DisplayObject } from "../../core/displayObject";
export declare class TextArea extends DisplayObject {
    _textAreaElement: HTMLTextAreaElement;
    private _multiLine;
    private _wordWrap;
    multiLine: boolean;
    wordWrap: boolean;
    private k;
    private vScroller;
    private hScroller;
    private divPanel;
    private static isCSSLoaded;
    constructor();
    private r;
    private t;
    private _myTimeHaneld;
    private refresh;
    private refreshFunction;
    private _value;
    value: string;
}
