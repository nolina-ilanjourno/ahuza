import KeywordForm from "@/Components/organisations/forms/KeywordForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const KeywordCreateForm = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <KeywordForm />
        </AuthenticatedLayout>
    );
};

export default KeywordCreateForm;
