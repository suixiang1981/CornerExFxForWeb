import { TreeView, TreeViewItem, ItemCollection } from "../treeView/treeView";
import { ListItemData, IListItem } from "../listBox/listBase";
import { ArrayCollection } from "../../core/arrayCollection";
import { EventDispatcher } from "../../core/eventDispatcher";
import { Handle } from "../handle/handle";
export declare class ListView extends TreeView {
    protected setItemStyle(item: any, isSelected: boolean): void;
    private _backgroundColorFields;
    backgroundColorFields: string[];
    private _colorFields;
    colorFields: string[];
    fontFields: string[];
    private _fontFields;
    refresh(): void;
    private titleDiv;
    private static isListViewCSSLoaded;
    private static isListViewCSSDarkLoaded;
    protected createListItem(data: ListItemData): IListItem;
    setItemData(data: ListItemData, item: IListItem): void;
    colorsFunction: (data: ListItemData) => string[];
    fontsFunction: (data: ListItemData) => string[];
    backgroundColorsFunction: (data: ListItemData) => string[];
    private setItemStyles;
    protected isDark: boolean;
    protected _titleVisible: boolean;
    titleVisible: boolean;
    private _multiLine;
    constructor(isDark?: boolean, multiLine?: boolean);
    private removeTitleItem;
    private itemWidth;
    private isSetItemsWidth;
    private setTitleAndItems;
    selectedItem: ListViewItem;
    readonly items: ItemCollection<ListViewItem>;
    readonly titleItems: ArrayCollection<TitleItem>;
    private _titleItems;
}
export declare enum TitleStyle {
    Default = 0,
    Order = 1,
    OrderDESC = 2
}
export declare class TitleItem extends EventDispatcher {
    _handle: Handle;
    private width0;
    element: HTMLDivElement;
    private listViewTitleLabel;
    private isHandleMove;
    private handleLeft;
    protected isDark: boolean;
    private listViewTitleOrder;
    private _style;
    style: TitleStyle;
    constructor(label: string, width?: number, isDark?: boolean);
    label: string;
    protected _label: string;
    width: number;
    private _width;
    left: number;
    private _left;
}
export declare class ListViewItem extends TreeViewItem {
    private _multiLine;
    readonly _height: number;
    sizeRefresh(): void;
    private subItems;
    private titleItems;
    setBackgroundColors(colors: string[]): void;
    setFonts(fonts: string[]): void;
    private setStylesFun;
    setColors(colors: string[]): void;
    _setSubItems(titleItems?: ArrayCollection<TitleItem>): void;
    protected isDark: boolean;
    private iii;
    constructor(label: string, icon?: string, data?: Array<any>, isDark?: boolean, multiLine?: boolean);
    readonly items: ItemCollection<ListViewItem>;
    width: number;
    private _width;
}
