import { DisplayObject } from "../../core/displayObject";
import { FXEvent } from "../../core/fXEvent";
export declare class BaiduMap extends DisplayObject {
    static BMAP_ANIMATION_BOUNCE: number;
    static BMAP_ANIMATION_DROP: number;
    private map;
    private mapDiv;
    private mapDivId;
    private ak;
    constructor(ak: string);
    private loadJScript;
    private init;
    enableScrollWheelZoom(): void;
    centerAndZoom(point: MapPoint, zoom: Number): void;
    panTo(point: MapPoint): void;
    setZoom(zoom: number): void;
    addMarker(id: string, point: MapPoint, label?: string): void;
    selectMarker(id: string): void;
    private _selectedMarkerId;
    readonly selectedMarkerId: string;
    private makeDict;
}
export declare class MapPoint {
    x: Number;
    y: Number;
    constructor(x: Number, y: Number);
}
export declare class FxMapEvent extends FXEvent {
    static readonly Load: string;
}
