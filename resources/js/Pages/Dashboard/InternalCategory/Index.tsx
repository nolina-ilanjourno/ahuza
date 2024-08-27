import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import InternalCategory from "@/Interfaces/InternalCategory";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Fragment } from "react";

export default function InternalCategoriesView({
    auth,
    categories: {
        data,
        meta: { links },
    },
}: PageProps<{
    categories: PaginatedData<InternalCategory>;
}>) {
    const onDelete = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette catégorie ?")) {
            return router.delete(
                route("dashboard.internal-categories.destroy", id)
            );
        }
    };

    const columns: ColumnDef<InternalCategory>[] = [
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.internal-categories.edit", id)}
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
            <TableV2<InternalCategory>
                data={data}
                columns={columns}
                links={links}
            />
        </AuthenticatedLayout>
    );
}
