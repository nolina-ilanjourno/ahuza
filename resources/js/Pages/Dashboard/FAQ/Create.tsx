import FAQForm from "@/Components/organisations/forms/FAQForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { FC } from "react";

const FAQCreateView: FC<PageProps> = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <FAQForm />
        </AuthenticatedLayout>
    );
};

export default FAQCreateView;
