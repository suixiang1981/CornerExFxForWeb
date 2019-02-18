import { DisplayObject } from "../../core/displayObject";
import { ListBase, IListItemData } from "../listBox/listBase";
export declare class TabBar extends DisplayObject {
    private _dataProvider;
    private _oldW;
    private _oldH;
    dataProvider: ListBase;
    private tabItems;
    private dataProvider_change;
    private removeItem;
    private addItem;
    private timeH;
    private setTabs;
    private setTabsFun;
}
export declare class TabItem extends DisplayObject {
    private timer;
    private tabBarItem;
    private tabBarItemIcon;
    private tabBarItemLabel;
    private tabBarItemCloseButton;
    onresize: () => void;
    onclick: (t: TabItem) => void;
    onclose: (t: TabItem) => void;
    private _oldW;
    private static isCSSLoaded;
    constructor(data?: IListItemData);
    dispose(): void;
    readonly width: number;
    _isSelected: boolean;
    private data;
    setData(data: IListItemData): void;
}
