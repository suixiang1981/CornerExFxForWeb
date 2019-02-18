import { DisplayObject } from "../../core/displayObject";
import { FXEvent } from "../../core/fXEvent";
export declare class Handle extends DisplayObject {
    constructor();
    private end;
    private move;
    private start;
    private _dx;
    private _dy;
    private _isMove;
}
export declare class FXMoveEvent extends FXEvent {
    x: number;
    y: number;
    static readonly MoveStart: string;
    static readonly Move: string;
    static readonly MoveEnd: string;
}
