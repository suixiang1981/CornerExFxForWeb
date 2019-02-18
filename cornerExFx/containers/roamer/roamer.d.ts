import { DisplayObject } from "../../core/displayObject";
import { DisplayObjectContainer } from "../../core/displayObjectContainer";
export declare class Roamer extends DisplayObject {
    private handle;
    private x;
    private y;
    protected rootPanel: RoamerPanel;
    private _zoom;
    constructor(root?: RoamerPanel);
    private setZoom;
}
export declare class RoamerPanel extends DisplayObjectContainer {
    constructor();
    private _zoom;
    private x0Arr;
    private y0Arr;
    setZoom(z: number): void;
}
