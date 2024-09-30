import KeywordGroupForm from "@/Components/organisations/forms/KeywordGroupForm";
import KeywordGroup from "@/Interfaces/KeywordGroup";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";

const KeywordGroupEditView = ({
    auth,
    keywordGroup,
}: PageProps<{
    keywordGroup: KeywordGroup;
}>) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <KeywordGroupForm keywordGroup={keywordGroup} />
        </AuthenticatedLayout>
    );
};

export default KeywordGroupEditView;
