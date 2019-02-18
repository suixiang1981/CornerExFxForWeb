import { FieldBase } from "./fieldBase";
import { FXEvent } from "../../core/fXEvent";
export declare class FileField extends FieldBase<string> {
    protected fieldBrowseDiv: HTMLDivElement;
    protected fieldClearDiv: HTMLDivElement;
    private fieldIcon;
    _showClear: boolean;
    private static isFileFieldCSSLoaded;
    constructor();
    labelWidth: number;
    protected loadHTML(): void;
    postHost: string;
    postPort: number;
    uploadFunction: (data: any) => string;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    protected setInputValue(): void;
    protected _enabled: boolean;
    enabled: boolean;
    maxSize: number;
}
export declare class FxFileFieldEvent extends FXEvent {
    size: number;
    static readonly Uploading: string;
    static readonly Upload: string;
    static readonly Error: string;
    static readonly Download: string;
    fileName: string;
    path: string;
}
