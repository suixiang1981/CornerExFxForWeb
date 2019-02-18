import { TreeView } from "../../controls/treeView/treeView";
import { MVVMTreeInfo } from "../../mvvm/mvvmBase";
import { ListDataBox } from "../listDataBox/listDataBox";
export declare class TreeDataView extends ListDataBox {
    protected _control: TreeView;
    protected treeDataName: string;
    private openingItem;
    constructor(name: string, port?: number, isDark?: boolean);
    readonly Info: MVVMTreeInfo;
    readonly control: TreeView;
    private treeParent;
    load(parent?: string, where?: string): void;
    loadData(): void;
}
