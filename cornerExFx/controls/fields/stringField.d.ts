import { FieldBase } from "./fieldBase";
export declare class StringField extends FieldBase<string> {
    constructor(element?: HTMLDivElement, hue?: MaterialDesignHue, isDrak?: boolean);
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    private _maxLenght;
    maxLenght: number;
    private _minLenght;
    minLenght: number;
}
