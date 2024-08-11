import IconButton from "@/Components/atoms/IconButton";
import TableV2 from "@/Components/Table/TableV2";
import type File from "@/Interfaces/File";
import PaginatedData from "@/Interfaces/PaginatedData";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { ColumnDef } from "@tanstack/react-table";
import { DateTime } from "luxon";
import { Fragment, useRef } from "react";
import { Image } from "react-bootstrap";
import { useCopyToClipboard } from "react-use";

export default function ImagesView({
    auth,
    images: {
        data,
        meta: { links },
    },
}: PageProps<{
    images: PaginatedData<File>;
}>) {
    const [_, copy] = useCopyToClipboard();

    const onDelete = (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer cette image ?")) {
            return router.delete(route("dashboard.images.destroy", id));
        }
    };

    const columns = useRef<ColumnDef<File>[]>([
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id, link }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.images.edit", id)}
                    />
                    <IconButton
                        size="sm"
                        icon="trash-2"
                        className="ms-1"
                        variant="danger"
                        onClick={() => onDelete(id)}
                    />
                    <IconButton
                        size="sm"
                        icon="copy"
                        className="ms-1"
                        variant="secondary"
                        onClick={() => copy(link)}
                    />
                </Fragment>
            ),
            cell: (info) => info.getValue(),
        },
        {
            header: "Label",
            footer: (props) => props.column.id,
            accessorFn: ({ label }) => label ?? "N/A",
            id: "label",
            cell: (info) => info.getValue(),
        },
        {
            header: "Aperçu",
            footer: (props) => props.column.id,
            accessorFn: ({ link }) => (
                <Image src={link} thumbnail width={100} />
            ),
            id: "link",
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
            <TableV2<File> data={data} columns={columns} links={links} />
        </AuthenticatedLayout>
    );
}
