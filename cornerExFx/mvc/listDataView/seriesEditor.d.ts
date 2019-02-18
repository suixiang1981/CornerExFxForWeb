import { DisplayObject } from "../../core/displayObject";
import { ListSelectField } from "../../controls/fields/listSelectField";
import { MVVMListInfo } from "../../mvvm/mvvmBase";
import { ArrayCollection } from "../../core/arrayCollection";
export declare class SeriesEditor extends DisplayObject {
    field: ListSelectField;
    typeField: ListSelectField;
    axisTypeField: ListSelectField;
    private seriesEditorLabel;
    private static isCSSLoaded;
    private info;
    onChange: () => void;
    private list;
    constructor(info: MVVMListInfo, list: ArrayCollection<SeriesEditor>);
    private setFieldListCancel;
    private oldType;
    private oldField;
    protected setFieldList(): void;
    private typeCompatibility;
    private setLatterFieldList;
}
