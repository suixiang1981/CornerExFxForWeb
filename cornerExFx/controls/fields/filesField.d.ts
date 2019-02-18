import { FieldBase } from "./fieldBase";
import { ArrayCollection } from "../../core/arrayCollection";
import { FileField } from "./FileField";
export declare class FilesField extends FieldBase<string> {
    static isFilesFieldCSSLoaded: boolean;
    private addButtonDiv;
    fileFieldCollection: ArrayCollection<FileField>;
    private _postHost;
    private _postPort;
    postHost: string;
    postPort: number;
    constructor();
    private addField;
    labelWidth: number;
    private timer;
    private oldH;
    private setFields;
    protected loadHTML(): void;
    protected _value: string;
    value: string;
    protected _enabled: boolean;
    enabled: boolean;
    private _maxSize;
    maxSize: number;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
}
