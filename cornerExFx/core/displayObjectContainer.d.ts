import { DisplayObject } from "./displayObject";
import { Button } from "../controls/button/button";
/**
 * 容器的基类。
 */
export declare class DisplayObjectContainer extends DisplayObject {
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    /**
     * 添加一个可视化对象到容器。
     * @param child - 要添加的可视化对象。
     */
    addChild(child: DisplayObject): void;
    /**
    * 移除一个可视化对象到容器。
    * @param child - 要添加的可视化对象。
    */
    removeChild(child: DisplayObject): void;
    private _childArr;
    private _activatedDisplayObject;
    protected _panel: HTMLDivElement;
    readonly panel: HTMLDivElement;
    readonly children: Array<DisplayObject>;
    protected _defaultButton: Button;
    defaultButton: Button;
}
