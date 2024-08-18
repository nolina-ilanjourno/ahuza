import { File as Buffer } from "buffer";

export interface FileForm {
    file: Buffer;
    label: string;
}

export default interface File {
    id: string;
    label: string;
    name: string;
    size: number;
    mime_type: string;
    link: string;
    deleted_at: string;
    created_at: string;
    updated_at: string;
}
