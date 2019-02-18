import { DisplayObject } from "../../core/displayObject";
import { FXEvent } from "../../core/fXEvent";
export interface IField {
    verified: boolean;
    verify(): void;
    field: string;
    label: string;
    value: any;
    labelWidth: number;
    xmlDataProvider: Element;
    percentHeight: number;
    percentWidth: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
    element: Element;
    enabled: boolean;
    visible: boolean;
    tag: any;
}
export declare class FieldBase<T> extends DisplayObject implements IField {
    protected labelDiv: HTMLDivElement;
    protected inputDiv: HTMLDivElement;
    protected popupButtonDiv: HTMLDivElement;
    protected input: HTMLElement;
    protected valueString: string;
    private static isCSSLoaded;
    readonly anchor: HTMLAnchorElement;
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    protected loadHTML(): void;
    tabIndex: number;
    protected _verified: boolean;
    verified: boolean;
    verify(): void;
    protected setInputDivStyle(): void;
    protected _field: string;
    field: string;
    protected _value: T;
    value: T;
    protected setInputValue(): void;
    protected setXMLValue(): void;
    protected _label: string;
    label: string;
    protected _labelWidth: number;
    labelWidth: number;
    protected _dataElement: Element;
    xmlDataProvider: Element;
    protected valueToValueString(): void;
    protected valueStringToValue(): void;
    height: number;
    percentHeight: number;
    protected _enabled: boolean;
    enabled: boolean;
}
export declare class FxFieldEvent<T> extends FXEvent {
    static readonly Change: string;
    oldValue: T;
    newValue: T;
}
