import { useForm } from "@inertiajs/react";
import { Editor as TinEditor, IAllProps } from "@tinymce/tinymce-react";
import { FC, Fragment, useRef, useState } from "react";
import Loader from "./Loader";
import { useStoreFileMutation } from "@/Services/files";

const Editor: FC<
    Partial<Omit<IAllProps, "apiKey" | "init" | "initialValue">>
> = ({ value, ...props }) => {
    const [storeFileMutation] = useStoreFileMutation();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const editorRef = useRef<TinEditor>(null);
    const template = useRef<string>(`
        <div>
            <header>
                <h1>[Article Title]</h1>
                <p>[Author Name], [Author Title]</p>
                <p>[Clinic Name], [Location]</p>
                <p>[Contact Information]</p>
            </header>

            <section>
                <h2>[Section Title]</h2>
                <p>[Introduction or general information about the section.]</p>
            </section>

            <section>
                <h2>[Section Title]</h2>
                <p>[Description or detailed information about this section.]</p>
                <p>[Further details or points to consider.]</p>
                <ul>
                    <li>[Bullet point information]</li>
                    <li>[Bullet point information]</li>
                    <li>[Bullet point information]</li>
                    <li>[Bullet point information]</li>
                </ul>
            </section>

            <section>
                <h2>[Section Title]</h2>
                <ul>
                    <li>[Bullet point information with description]</li>
                    <li>[Bullet point information with description]</li>
                    <li>[Bullet point information with description]</li>
                    <li>[Bullet point information with description]</li>
                </ul>
            </section>

            <section>
                <h2>[Section Title]</h2>
                <p>[Conclusion or summary of the article.]</p>
            </section>

            <footer>
                <p>Source: [Source URL]</p>
                <p>Related Publications:</p>
                <ul>
                    <li>[Publication 1]</li>
                    <li>[Publication 2]</li>
                    <li>[Publication 3]</li>
                    <li>[Publication 4]</li>
                </ul>
            </footer>
        </div>
    `).current;

    const images_upload_handler = async (blobInfo: any): Promise<string> => {
        const formData = new FormData();
        formData.append("file", blobInfo.blob());
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
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount linkchecker",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat",
                }}
                initialValue={!value ? template : undefined}
                value={value}
                {...props}
            />
        </Fragment>
    );
};

export default Editor;
