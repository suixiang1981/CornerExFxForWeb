import { EventDispatcher } from "./eventDispatcher";
import { DisplayObjectContainer } from "./displayObjectContainer";
import { Dictionary } from "./dictionary";
/**
 * 可视组件的基类。
 */
export declare class DisplayObject extends EventDispatcher {
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    protected textDictionary: Dictionary<string, string>;
    protected loadText(textPath: string): void;
    protected loadHtml(element: HTMLElement, htmlPath: string): void;
    cssDict: Object;
    protected loadCSS(cssPath: string): void;
    private loadChild;
    protected createDisplayObject(className: string, element: HTMLDivElement): DisplayObject;
    protected getHtmlPath(): string;
    protected getCSSPath(): string;
    protected getTextPath(): string;
    protected _element: HTMLDivElement;
    /**
     * 可视组件的Div标签。任何可视组件都基于一个Div标签实现。
     */
    element: HTMLDivElement;
    protected setNumberStyle(element: HTMLElement, attrib: string, value: number, unit?: string): void;
    /**
     * 组件相对于容器的宽度。单位为px。
     */
    width: number;
    protected setWidth(newValue: number): void;
    protected _width: number;
    /**
     * 组件相对于容器的高度。单位为px。
     */
    height: number;
    protected setHeight(newValue: number): void;
    protected _height: number;
    /**
     * 组件相对于容器的左边距。单位为px。
     */
    protected _left: number;
    left: number;
    /**
     * 组件相对于容器的上边距。单位为px。
     */
    protected _top: number;
    top: number;
    /**
     * 组件相对于容器的右边距。单位为px。
     */
    protected _right: number;
    right: number;
    /**
     * 组件相对于容器的下边距。单位为px。
     */
    protected _bottom: number;
    bottom: number;
    /**
     * 组件相对于容器的百分比宽度。
     */
    protected _percentWidth: number;
    percentWidth: number;
    /**
     * 组件相对于容器的百分比高度。
     */
    protected _percentHeight: number;
    percentHeight: number;
    /**
     * parent
     * @private
     */
    _parent: DisplayObjectContainer;
    readonly parent: DisplayObjectContainer;
    tag: any;
    protected _visible: boolean;
    visible: boolean;
    protected getParentWidth(): number;
    protected getParentHeight(): number;
    protected draw(): void;
    protected _hue: MaterialDesignHue;
    hue: MaterialDesignHue;
    protected _isDrak: boolean;
    isDrak: boolean;
    protected _enabled: boolean;
    enabled: boolean;
    private _tabIndex;
    tabIndex: number;
    _toolTip: string;
    toolTip: string;
}
