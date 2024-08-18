import { useStoreFileMutation } from "@/Services/files";
import { IAllProps, Editor as TinEditor } from "@tinymce/tinymce-react";
import { FC, Fragment, useRef, useState } from "react";
import Loader from "./Loader";
import { usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import Article from "@/Interfaces/Article";

const Editor: FC<
    Partial<Omit<IAllProps, "apiKey" | "init" | "initialValue">>
> = ({ value, ...props }) => {
    const { article } = usePage<
        PageProps<{
            article: Article;
        }>
    >().props;
    const [storeFileMutation] = useStoreFileMutation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const editorRef = useRef<TinEditor>(null);

    const images_upload_handler = async (blobInfo: any): Promise<string> => {
        const formData = new FormData();
        formData.append("file", blobInfo.blob());
        formData.append("label", blobInfo.filename());
        const data = await storeFileMutation(formData).unwrap();
        return data.link;
    };

    return (
        <Fragment>
            <Loader visible={isLoading} />
            <TinEditor
                ref={editorRef}
                onLoadContent={() => setIsLoading(false)}
                apiKey="wyfwpj4shk2r19v64m7is3mgsj1tegsnonqaghu050k8egns"
                init={{
                    height: 900,
                    images_upload_handler,
                    images_reuse_filename: true,
                    image_list: "/api/files/list",
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize quicklink | bold italic underline image forecolor backcolor | align | link anchor | numlist bullist indent outdent",
                }}
                value={value}
                {...props}
            />
        </Fragment>
    );
};

export default Editor;
