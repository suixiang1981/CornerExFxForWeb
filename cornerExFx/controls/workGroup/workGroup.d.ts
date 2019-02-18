import { DisplayObject } from "../../core/displayObject";
import { Roamer, RoamerPanel } from "../../containers/roamer/roamer";
export declare class WorkGroup extends Roamer {
    constructor();
    protected _xmlDataProviderElement: Element;
    xmlDataProvider: Element;
    private setItemsXmlDataProvider;
}
export declare class WorkGroupNode extends RoamerPanel {
    private size;
    setZoom(z: number): void;
    private item;
    xmlDataProvider: Element;
    private nodes;
    private setItemsXmlDataProvider;
    constructor(size?: number);
}
export declare class WorkGroupItem extends DisplayObject {
    isCSSLoaded: boolean;
    border: HTMLDivElement;
    background: HTMLDivElement;
    label: HTMLDivElement;
    icon: HTMLImageElement;
    constructor();
}
