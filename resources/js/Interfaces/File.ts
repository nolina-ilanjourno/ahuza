import { File as Buffer } from "buffer";

export interface FileForm {
    file: Buffer;
    label: string;
}

export default interface File {
    id: string;
    label: string | null;
    name: string;
    size: number;
    mime_type: string;
    link: string;
    created_at: string;
    updated_at: string;
}
