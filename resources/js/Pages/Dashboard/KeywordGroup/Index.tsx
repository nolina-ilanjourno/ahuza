import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import KeywordGroup from "@/Interfaces/KeywordGroup";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Fragment } from "react";

export default function KeywordGroupsView({
    auth,
    keywordGroups: {
        data,
        meta: { links },
    },
}: PageProps<{
    keywordGroups: PaginatedData<KeywordGroup>;
}>) {
    const onDelete = (id: string) => {
        if (
            confirm(
                "Êtes-vous sûr de vouloir supprimer ce groupe de mot-clés ?"
            )
        ) {
            return router.delete(route("dashboard.keyword-groups.destroy", id));
        }
    };

    const columns: ColumnDef<KeywordGroup>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.keyword-groups.edit", id)}
                    />
                    <IconButton
                        size="sm"
                        icon="trash-2"
                        className="ms-1"
                        variant="danger"
                        onClick={() => onDelete(id)}
                    />
                </Fragment>
            ),
            cell: (info) => info.getValue(),
        },
        {
            header: "Label",
            footer: (props) => props.column.id,
            accessorFn: ({ label }) => label,
            id: "label",
            cell: (info) => info.getValue(),
        },
        {
            header: "Créé le",
            footer: (props) => props.column.id,
            accessorFn: ({ created_at }) =>
                DateTime.fromISO(created_at).toFormat("dd-MM-yyyy HH:mm"),
            id: "created_at",
            cell: (info) => info.getValue(),
        },
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <TableV2<KeywordGroup>
                data={data}
                columns={columns}
                links={links}
            />
        </AuthenticatedLayout>
    );
}
