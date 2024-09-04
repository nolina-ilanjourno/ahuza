import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import Keyword from "@/Interfaces/Keyword";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Fragment } from "react";

export default function KeywordsView({
    auth,
    keywords: {
        data,
        meta: { links },
    },
}: PageProps<{
    keywords: PaginatedData<Keyword>;
}>) {
    const onDelete = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer ce mot-clé ?")) {
            return router.delete(route("dashboard.keywords.destroy", id));
        }
    };

    const columns: ColumnDef<Keyword>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.keywords.edit", id)}
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
            <TableV2<Keyword> data={data} columns={columns} links={links} />
        </AuthenticatedLayout>
    );
}
