import { FieldBase } from "./fieldBase";
export declare class PhoneField extends FieldBase<string> {
    callFunction: (value: string, field: string) => void;
    static isPhoneFieldLoaded: boolean;
    private phoneFieldCallDiv;
    constructor();
    protected loadHTML(): void;
    private _showCallButton;
    showCallButton: boolean;
    private _regExp;
    regExp: RegExp;
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    private _maxLenght;
    maxLenght: number;
    private _minLenght;
    minLenght: number;
}
