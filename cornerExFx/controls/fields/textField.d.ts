import { FieldBase } from "./fieldBase";
export declare class TextField extends FieldBase<string> {
    private textArea;
    multiLine: boolean;
    constructor();
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    protected setInputValue(): void;
    private _maxLenght;
    maxLenght: number;
    private _minLenght;
    minLenght: number;
}
