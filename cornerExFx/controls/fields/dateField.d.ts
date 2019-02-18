import { ComboFieldBase } from "./comboFieldBase";
export declare class DateField extends ComboFieldBase<Date> {
    private dateChooser;
    private isShowTimeEditor;
    constructor(isShowTimeEditor?: boolean);
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    protected openHandler(): void;
}
