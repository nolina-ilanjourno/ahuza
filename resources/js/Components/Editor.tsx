import { useStoreFileMutation } from "@/Services/files";
import { IAllProps, Editor as TinEditor } from "@tinymce/tinymce-react";
import { FC, Fragment, useRef, useState } from "react";
import Loader from "./Loader";
import { Button } from "react-bootstrap";

interface EditorProps
    extends Partial<Omit<IAllProps, "apiKey" | "init" | "initialValue">> {
    show?: boolean;
}

const Editor: FC<EditorProps> = ({ value, show = false, ...props }) => {
    const [isShow, setIsShow] = useState<boolean>(show);
    const [storeFileMutation] = useStoreFileMutation();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const editorRef = useRef<TinEditor>(null);

    const _setIsShow = () => {
        setIsLoading(true);
        setIsShow(true);
    };

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
            {isShow ? (
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
                    value={value?.replace(/\\/g, "")}
                    {...props}
                />
            ) : (
                <Fragment>
                    <Button variant="link" onClick={_setIsShow} size="sm">
                        ( Edit )
                    </Button>
                    <article
                        dangerouslySetInnerHTML={{
                            __html: value?.replace(/\\/g, "") ?? "",
                        }}
                        style={{
                            height: 900,
                            overflow: "scroll",
                        }}
                    />
                </Fragment>
            )}
        </Fragment>
    );
};

export default Editor;
