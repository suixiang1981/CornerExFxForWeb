import { ContentType } from "./contentType";
import { DataType } from "./dataType";
export declare class HttpUtil {
    static dataTypeIsString(dataType: DataType): boolean;
    static extensionToDataType(extension: string): DataType;
    static contentTypeToDataType(contentType: ContentType, extension?: string): DataType;
    static dataTypeToContentType(dataType: DataType): ContentType;
    static stringToContentType(contentTypeStr: string): ContentType;
}
