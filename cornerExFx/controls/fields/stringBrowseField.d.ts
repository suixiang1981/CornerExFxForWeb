import { BrowseFieldBase } from "./browseFieldBase";
import { TitleWindow } from "../../containers/titleWindow/titleWindow";
export declare class StringBrowseField extends BrowseFieldBase<string> {
    constructor();
    verify(): void;
    protected valueStringToValue(): void;
    protected valueToValueString(): void;
    private _maxLenght;
    maxLenght: number;
    private _minLenght;
    minLenght: number;
    protected openHandler(): void;
    protected selectedHandler(): void;
    openFunction: (titieWindow: TitleWindow, field: string) => void;
    selectedFunction: (field: string) => string;
}
