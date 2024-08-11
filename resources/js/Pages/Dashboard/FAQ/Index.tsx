import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import FAQ from "@/Interfaces/FAQ";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { FC, Fragment, useRef } from "react";

const FAQView: FC<
    PageProps<{
        faqs: PaginatedData<FAQ>;
    }>
> = ({
    auth,
    faqs: {
        data,
        meta: { links },
    },
}) => {
    const onDelete = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette FAQ ?")) {
            return router.delete(route("dashboard.faqs.destroy", id));
        }
    };

    const columns = useRef<ColumnDef<FAQ>[]>([
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.faqs.edit", id)}
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
    ]).current;
    return (
        <AuthenticatedLayout user={auth.user}>
            <TableV2<FAQ> data={data} columns={columns} links={links} />
        </AuthenticatedLayout>
    );
};

export default FAQView;
