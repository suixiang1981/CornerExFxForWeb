import { FieldBase } from "./fieldBase";
export declare class NumberField extends FieldBase<number> {
    private fieldNumberUpDiv;
    private fieldNumberDownDiv;
    private fieldNumberUnitDiv;
    stepSize: number;
    decimals: number;
    private _timerHandle;
    private static isNumberFieldCSSLoaded;
    constructor();
    protected loadHTML(): void;
    private upOrDown;
    private clearTimer;
    private up;
    private down;
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    private _maxValue;
    maxValue: number;
    private _minValue;
    minValue: number;
    private _unit;
    unit: string;
    enabled: boolean;
}
