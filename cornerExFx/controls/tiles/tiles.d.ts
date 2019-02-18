import { DisplayObject } from "../../core/displayObject";
import { ListBase, IListItem, ListItemData } from "../listBox/listBase";
import { ArrayCollection } from "../../core/arrayCollection";
export declare class Tiles extends ListBase {
    private oldW;
    private oldH;
    protected _items: ArrayCollection<Tile>;
    readonly items: ArrayCollection<Tile>;
    constructor();
    private tile;
    protected _xmlDataProviderElement: Element;
    xmlDataProvider: Element;
    protected createListItem(data: TileData): Tile;
    xmlDataProviderToListItemData(xmlDataProvider: Element): TileData;
    colorField: string;
    widthField: string;
    heightField: string;
    backgroundColorField: string;
    imageField: string;
    xField: string;
    yField: string;
}
export declare class TileData extends ListItemData {
    color: string;
    backgroundColor: string;
    image: string;
    width: number;
    height: number;
    x: number;
    y: number;
}
export declare class Tile extends DisplayObject implements IListItem {
    static size: number;
    private static isCSSLoaded;
    private tileIcon;
    private tileImage;
    private tileLabel;
    private tileNumber;
    constructor(label: string, icon?: string, width?: number, height?: number, x?: number, y?: number, color?: string, backgroundColor?: string, image?: string, data?: Array<any>);
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
    protected _image: string;
    image: string;
}
