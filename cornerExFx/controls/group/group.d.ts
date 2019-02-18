import { DisplayObject } from "../../core/displayObject";
import { ListBase, IListItem, ListItemData } from "../listBox/listBase";
import { ArrayCollection } from "../../core/arrayCollection";
export declare class GroupPanel extends ListBase {
    private handle;
    private isCSSLoaded;
    private w;
    private h;
    private oldw;
    private oldh;
    private cx;
    private cy;
    private x;
    private y;
    private r;
    private groupItemArr;
    protected _items: ArrayCollection<GroupItem>;
    readonly items: ArrayCollection<GroupItem>;
    private panel;
    private zoomNumber;
    constructor();
    private setGroupItems;
    private zoom;
    protected _xmlDataProviderElement: Element;
    xmlDataProvider: Element;
    protected createListItem(data: GroupData): GroupItem;
    xmlDataProviderToListItemData(xmlDataProvider: Element): GroupData;
    colorField: string;
    backgroundColorField: string;
}
export declare class GroupData extends ListItemData {
    color: string;
    backgroundColor: string;
    image: string;
}
export declare class GroupItem extends DisplayObject implements IListItem {
    static size: number;
    private static isCSSLoaded;
    private groupItemIcon;
    private groupItemLabel;
    constructor(label: string, icon?: string, color?: string, backgroundColor?: string, data?: Array<any>);
    data: Array<any>;
    protected _data: Array<any>;
    protected _icon: string;
    icon: string;
    protected _label: string;
    label: string;
    protected _color: string;
    color: string;
    protected _backgroundColor: string;
    backgroundColor: string;
}
