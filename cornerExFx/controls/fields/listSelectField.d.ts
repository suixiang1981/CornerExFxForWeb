import { ComboFieldBase } from "./comboFieldBase";
import { ListBox } from "../listBox/listBox";
import { ListItemData } from "../listBox/listBase";
export declare class ListSelectField extends ComboFieldBase<ListItemData> {
    private _listBox;
    loadItemsFunciont: (callback: (itemsData: Array<ListItemData>) => void) => void;
    loadItemsByXmlDataProviderFunciont: (callback: (xmlDataProvider: Element) => void) => void;
    loadItemFunciont: (id: any, callback: (itemData: ListItemData) => void) => void;
    loadItemByXmlDataProviderFunciont: (id: any, callback: (xmlDataProvider: Element) => void) => void;
    private _maxLenght;
    private _minLenght;
    minLenght: number;
    verify(): void;
    readonly listBox: ListBox;
    constructor();
    private loadItemsFunction;
    private loadItemsByXmlDataProviderFunction;
    private loadItemCallback;
    private loadItemByXmlDataProviderCallback;
    value: ListItemData;
    protected _value: ListItemData;
    protected setInputValue(): void;
    protected setXMLValue(): void;
    private valueIsNULL;
    protected _dataElement: Element;
    xmlDataProvider: Element;
    protected openHandler(): void;
}
