import { DisplayObject } from "../../core/displayObject";
export declare class Scroller extends DisplayObject {
    private handle;
    private bodyDIV;
    private upDIV;
    private downDIV;
    private handleDIV;
    private _timerHandle;
    private p0;
    private isVertical;
    private isHCSSLoaded;
    private isVCSSLoaded;
    constructor(isVertical?: boolean);
    private upOrDown;
    private handlerToValue;
    private clearTimer;
    private down;
    private up;
    private _count;
    count: number;
    private _pageCount;
    pageCount: number;
    private _value;
    value: number;
    private refresh;
    private dispatchScrollEvent;
}
