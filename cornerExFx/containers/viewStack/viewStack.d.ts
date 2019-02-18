import { ListBase, ListItemData, IListItem } from "../../controls/listBox/listBase";
import { ArrayCollection } from "../../core/arrayCollection";
import { DisplayObjectContainer } from "../../core/displayObjectContainer";
export declare class ViewStack extends ListBase {
    private setSelectedItem;
    constructor();
    protected _items: ArrayCollection<ViewStackItem>;
    readonly items: ArrayCollection<ViewStackItem>;
    _selectedItem: ViewStackItem;
    selectedItem: ViewStackItem;
    protected _xmlDataProviderElement: Element;
    xmlDataProvider: Element;
    protected createListItem(data: ListItemData): ViewStackItem;
}
export declare class ViewStackItem extends DisplayObjectContainer implements IListItem {
    constructor(label: string, icon?: string, data?: Array<any>, showCloseButton?: boolean);
    data: Array<any>;
    protected _data: Array<any>;
    protected _icon: string;
    icon: string;
    protected _label: string;
    label: string;
    protected _showCloseButton: boolean;
    showCloseButton: boolean;
}
