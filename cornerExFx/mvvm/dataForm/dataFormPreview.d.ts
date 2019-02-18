import { DisplayObject } from "../../core/displayObject";
import { FxFileFieldEvent } from "../../controls/fields/fileField";
export declare class DataFormPreview extends DisplayObject {
    private dataFormPreviewTitle;
    private dataFormPreviewImage;
    private windowClose;
    private oldPicW;
    private oldPicH;
    refresh: () => void;
    private oldE;
    close(): void;
    setField(e: FxFileFieldEvent): void;
    private static isCSSLoaded;
    constructor();
}
