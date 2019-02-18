import { FieldBase } from "./fieldBase";
export declare class checkField extends FieldBase<number> {
    constructor();
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
}
