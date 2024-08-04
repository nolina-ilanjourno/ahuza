import ImageForm from "@/Components/organisations/forms/ImageForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FC } from "react";

const ImageCreateView: FC<PageProps> = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <ImageForm />
        </AuthenticatedLayout>
    );
};

export default ImageCreateView;
