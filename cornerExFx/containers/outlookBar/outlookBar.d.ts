import { DisplayObjectContainer } from "../../core/displayObjectContainer";
import { ArrayCollection } from "../../core/arrayCollection";
import { ListBase, ListItemData, IListItem } from "../../controls/listBox/listBase";
export declare class OutlookBar extends ListBase {
    private static isCSSLoaded;
    private oldHeight;
    private setSelectedItem;
    protected loadHtml(): void;
    constructor();
    protected _items: ArrayCollection<OutlookBarItem>;
    readonly items: ArrayCollection<OutlookBarItem>;
    _selectedItem: OutlookBarItem;
    selectedItem: OutlookBarItem;
    protected _xmlDataProviderElement: Element;
    xmlDataProvider: Element;
    protected createListItem(data: ListItemData): OutlookBarItem;
}
export declare class OutlookBarItem extends DisplayObjectContainer implements IListItem {
    private outlookButtonIcon;
    private outlookButton;
    private outlookButtonLabel;
    private static isCSSLoaded;
    constructor(label: string, icon?: string, data?: Array<any>);
    data: Array<any>;
    protected _data: Array<any>;
    protected _icon: string;
    icon: string;
    protected _label: string;
    label: string;
    protected _isSelected: boolean;
    isSelected: boolean;
}
