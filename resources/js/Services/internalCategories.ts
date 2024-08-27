import Filters from "@/Interfaces/Fetch";
import InternalCategory from "@/Interfaces/InternalCategory";
import PaginatedData from "@/Interfaces/PaginatedData";
import api from "./api";

export const internalCategoriesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getInternalCategories: build.query<
            PaginatedData<InternalCategory>,
            Filters
        >({
            query: (params) => ({
                url: "/internal-categories",
                params,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useLazyGetInternalCategoriesQuery } = internalCategoriesApi;
