import { ArrayCollection } from "../../core/arrayCollection";
import { IListItem, ListItemData } from "../listBox/listBase";
import { ListBox, ListBoxItem } from "../listBox/listBox";
export declare class TreeView extends ListBox {
    protected isDark: boolean;
    private static isCSSLoaded;
    private static isCSSDarkLoaded;
    loadItemsFunciont: (id: any, callback: (id: any, itemsData: Array<TreeItemData>) => void) => void;
    loadItemsByXmlDataProviderFunciont: (id: any, callback: (id: any, xmlDataProvider: Element) => void) => void;
    constructor(isDark?: boolean);
    protected getTreeItemById(id: any, items?: ArrayCollection<TreeViewItem>): TreeViewItem;
    private loadTreeItemsCallback;
    private loadTreeItemsByXmlDataProviderCallback;
    setTreeItemsByData(itemsData: Array<TreeItemData>, items: ItemCollection<TreeViewItem>): void;
    setTreeItemsByXmlDataProvider(element: Element, items: ItemCollection<TreeViewItem>): void;
    xmlDataProvider: Element;
    protected createListItem(data: ListItemData): IListItem;
    protected _selectedItem: TreeViewItem;
    selectedItem: TreeViewItem;
    protected _items: ItemCollection<TreeViewItem>;
    readonly items: ItemCollection<TreeViewItem>;
    protected selectItem(items: ArrayCollection<TreeViewItem>, item: TreeViewItem): void;
    private itemOpeningListenerId;
    private itemOpenListenerId;
    private itemCloseListenerId;
    protected setItems(items: ArrayCollection<IListItem>): void;
    protected removeItemHandler(item: TreeViewItem): void;
}
export declare class TreeViewItem extends ListBoxItem {
    private _retract;
    retract: number;
    protected listItemDisclosureIcon: HTMLImageElement;
    _parent: TreeViewItem;
    readonly parent: TreeViewItem;
    protected loadHtml(): void;
    constructor(label: string, icon?: string, data?: Array<any>, isDark?: boolean);
    private removeItemHandler;
    protected _items: ItemCollection<TreeViewItem>;
    readonly items: ItemCollection<TreeViewItem>;
    icon: string;
}
export declare class ItemCollection<T> extends ArrayCollection<T> {
    protected _allItems: ArrayCollection<T>;
    protected _host: T;
    constructor(allItems: ArrayCollection<T>, host: T);
    private removeItemHandler;
    private setAddedItem;
    readonly host: T;
    private _isExpand;
    isExpand: boolean;
    protected setExpand(): void;
    private removeAllExpandedItems;
}
export declare class TreeItemData extends ListItemData {
    items: Array<TreeItemData>;
}
