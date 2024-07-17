import { Link } from "@inertiajs/react";
import get from "lodash/get";
import { ChevronRight } from "lucide-react";

interface TableProps<T> {
    columns: {
        name: string;
        label: string;
        colSpan?: number;
        renderCell?: (row: T) => React.ReactNode;
    }[];
    rows: T[];
    getRowDetailsUrl?: (row: T) => string;
}

export default function Table<T>({
    columns = [],
    rows = [],
    getRowDetailsUrl,
}: TableProps<T>) {
    return (
        <div className="table-responsive bg-white rounded shadow">
            <table className="table table-hover">
                <thead>
                    <tr className="fw-bold text-start">
                        {columns?.map((column) => (
                            <th
                                key={column.label}
                                colSpan={column.colSpan ?? 1}
                                className="px-3 py-3"
                            >
                                {column.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {/* Empty state */}
                    {rows?.length === 0 && (
                        <tr>
                            <td
                                className="px-3 py-5 text-center border-top"
                                colSpan={columns.length}
                            >
                                No data found.
                            </td>
                        </tr>
                    )}
                    {rows?.map((row, index) => {
                        return (
                            <tr key={index}>
                                {columns.map((column) => {
                                    return (
                                        <td
                                            key={column.name}
                                            className="border-top"
                                        >
                                            <a
                                                tabIndex={-1}
                                                href={
                                                    getRowDetailsUrl?.(
                                                        row
                                                    ) as string
                                                }
                                                className="d-flex align-items-center px-3 py-2"
                                            >
                                                {column.renderCell?.(row) ??
                                                    get(row, column.name) ??
                                                    "N/A"}
                                            </a>
                                        </td>
                                    );
                                })}
                                <td className="border-top">
                                    <a
                                        href={getRowDetailsUrl?.(row)!}
                                        className="d-flex align-items-center px-3"
                                    >
                                        <ChevronRight
                                            size={24}
                                            className="text-secondary"
                                        />
                                    </a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
