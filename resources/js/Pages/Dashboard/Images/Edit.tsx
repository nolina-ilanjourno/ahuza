import ImageForm from "@/Components/organisations/forms/ImageForm";
import type File from "@/Interfaces/File";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FC } from "react";

const ImageEditView: FC<
    PageProps<{
        image: File;
    }>
> = ({ auth, image }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <ImageForm image={image} />
        </AuthenticatedLayout>
    );
};

export default ImageEditView;
