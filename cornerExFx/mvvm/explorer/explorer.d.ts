import { DisplayObject } from "../../core/displayObject";
import { ListDataEditor } from "../listDataEditor/listDataEditor";
import { TreeDataView } from "../../mvc/treeDataView/TreeDataView";
export declare class Explorer extends DisplayObject {
    listDataEditor: ListDataEditor;
    private treeItemOpenAutoSelectId;
    treeDataView: TreeDataView;
    private idField;
    private handler;
    private parentField;
    private treeLoadCancel;
    private l;
    constructor(name: string, label: string, parent?: string, where?: string);
    private treeAutoSelect;
    private tree_change;
}
