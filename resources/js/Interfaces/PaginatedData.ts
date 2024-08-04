export interface MetaLinks {
    url: null | string;
    label: string;
    active: boolean;
}

type PaginatedData<T> = {
    data: T[];
    links: {
        first: string;
        last: string;
        prev: string | null;
        next: string | null;
    };
    meta: {
        current_page: number;
        from: number;
        last_page: number;
        path: string;
        per_page: number;
        to: number;
        total: number;
        links: MetaLinks[];
    };
};

export default PaginatedData;
