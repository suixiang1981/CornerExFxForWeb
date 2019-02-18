import { FieldBase } from "./fieldBase";
export declare class ComboFieldBase<T> extends FieldBase<T> {
    private static isComboFieldCSSLoaded;
    protected popupButtonDiv: HTMLDivElement;
    protected popupPanel: HTMLDivElement;
    private static comboFieldArray;
    protected comboFieldIcon: HTMLImageElement;
    constructor();
    private isPopup;
    popupWidth: number;
    popupHeight: number;
    protected _popup(): void;
    popup(): void;
    protected popdown(): void;
    private timePopupHandle;
    private timePopdownHandle;
    protected loadHTML(): void;
    enabled: boolean;
}
