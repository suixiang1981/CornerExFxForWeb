import { DisplayObject } from "../../core/displayObject";
import { ArrayCollection } from "../../core/arrayCollection";
import { FXEvent } from "../../core/fXEvent";
export declare class ListBase extends DisplayObject {
    iconFunction: (data: IListItemData) => string;
    labelFunction: (data: IListItemData) => string;
    getFieldValue(field: string, item: IListItemData): any;
    constructor();
    protected itemsPanel: HTMLDivElement;
    protected _allItems: ArrayCollection<any>;
    protected titleHeight: number;
    private _labelField;
    labelField: string;
    private _iconField;
    iconField: string;
    private _idField;
    idField: string;
    private _dataFieldList;
    dataFields: Array<string>;
    protected idFieldIndex: number;
    protected getIdFieldIndex(): void;
    xmlDataProviderToListItemData(xmlDataProvider: Element): ListItemData;
    protected setItemsData(data: Array<ListItemData>, items: ArrayCollection<IListItem>): void;
    setItemXmlDataProvider(xmlDataProvider: Element, item: IListItem): void;
    protected getAmendData(data: ListItemData): ListItemData;
    setItemData(data: ListItemData, item: IListItem): void;
    protected setItemsXmlDataProvider(xmlDataProvider: Element, items: ArrayCollection<IListItem>): void;
    addItemByXmlDataProvider(xmlDataProvider: Element, items?: ArrayCollection<IListItem>, index?: number): IListItem;
    addItemByData(listItemData: ListItemData, items?: ArrayCollection<IListItem>, index?: number): IListItem;
    protected createListItem(listItemData: ListItemData): IListItem;
    getIdByItem(item: IListItemData): any;
    getIdByXmlDataProvider(xmlDataProvider: Element): any;
    getIdByData(listItemData: IListItemData): any;
    protected getItemById(id: any, items?: ArrayCollection<IListItem>): IListItem;
    protected addItemArray: Array<IListItem>;
    private removeItemArray;
    private changeTimer;
    protected setItems(items: ArrayCollection<IListItem>): void;
    protected removeItemHandler(item: IListItem): void;
    protected changeHandler(): void;
    protected _selectedItem: any;
    selectedItem: any;
    protected selectItem(items: ArrayCollection<any>, item: any): void;
    private item_mouseDown;
    protected _items: ArrayCollection<IListItem>;
    readonly items: ArrayCollection<IListItem>;
}
export interface IListItemData {
    label: string;
    icon: string;
    data: Array<any>;
}
export interface IListItem extends IListItemData {
    element: HTMLDivElement;
    addEventListener: (type: string, handler: (e: FXEvent) => void) => void;
    removeAllEventListener: (type: string) => void;
}
export declare class ListItemData implements IListItemData {
    constructor(label: string, icon?: string, data?: Array<any>);
    label: string;
    icon: string;
    data: Array<any>;
}
