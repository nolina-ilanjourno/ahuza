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

    const onTrigger = (id: string, forDelete: boolean = false) => {
        if (
            forDelete &&
            confirm("Êtes-vous sûr de vouloir supprimer cette image ?")
        ) {
            return router.delete(route("dashboard.images.destroy", id));
        } else if (
            confirm("Êtes-vous sûr de vouloir restaurer cette image ?")
        ) {
            return router.put(route("dashboard.images.restore", id));
        }
    };

    const columns = useRef<ColumnDef<File>[]>([
        {
            header: "Actions",
            footer: (props) => props.column.id,
            accessorFn: ({ id, link, deleted_at }) => (
                <Fragment>
                    <IconButton
                        size="sm"
                        icon="eye"
                        href={route("dashboard.images.edit", id)}
                    />
                    <IconButton
                        size="sm"
                        icon={deleted_at ? "refresh-cw" : "trash-2"}
                        color="white"
                        className="mx-1"
                        variant={deleted_at ? "success" : "danger"}
                        onClick={() => onTrigger(id, !deleted_at)}
                    />
                    <IconButton
                        size="sm"
                        icon="copy"
                        variant="secondary"
                        onClick={() => copy(link)}
                    />
                </Fragment>
            ),
            cell: (info) => info.getValue(),
        },
        {
            header: "Aperçu",
            footer: (props) => props.column.id,
            accessorFn: ({ link }) => (
                <Image src={link} thumbnail width={150} height={150} />
            ),
            id: "link",
            cell: (info) => info.getValue(),
        },
        {
            header: "Label",
            meta: {
                style: {
                    minWidth: "200px",
                },
            },
            footer: (props) => props.column.id,
            accessorFn: ({ label }) => label ?? "N/A",
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
            <TableV2<File>
                data={data}
                columns={columns}
                links={links}
                trashed
            />
        </AuthenticatedLayout>
    );
}
