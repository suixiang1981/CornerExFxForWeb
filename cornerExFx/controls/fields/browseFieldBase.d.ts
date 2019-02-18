import { TitleWindow } from "../../containers/titleWindow/titleWindow";
import { FieldBase } from "./fieldBase";
export declare class BrowseFieldBase<T> extends FieldBase<T> {
    dialogPanel: HTMLDivElement;
    private static isBrowseFieldCSSLoaded;
    protected innerPanel: HTMLDivElement;
    protected okButton: HTMLDivElement;
    protected cancelButton: HTMLDivElement;
    protected fieldBrowseDiv: HTMLDivElement;
    protected titleWindow: TitleWindow;
    dialogWidth: number;
    dialogHeight: number;
    private _inputEnabled;
    inputEnabled: boolean;
    protected loadHTML(): void;
    protected openHandler(): void;
    protected selectedHandler(): void;
    enabled: boolean;
}
