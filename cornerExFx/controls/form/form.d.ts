import { DisplayObject } from "../../core/displayObject";
import { ArrayCollection } from "../../core/arrayCollection";
import { IField } from "../fields/fieldBase";
import { FXEvent } from "../../core/fXEvent";
export declare class Form extends DisplayObject {
    fields: ArrayCollection<IField>;
    protected isListMode: boolean;
    constructor(isListMode?: boolean);
    private oldW;
    private timer;
    private timerW;
    private setFields;
    private oldH;
    refresh(): void;
    protected _dataElement: Element;
    xmlDataProvider: Element;
    protected _verified: boolean;
    readonly verified: boolean;
    verify(): void;
    protected _enabled: boolean;
    enabled: boolean;
}
export declare class FxFormEvent extends FXEvent {
    static readonly Resize: string;
}
