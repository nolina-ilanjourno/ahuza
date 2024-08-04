import PaginatedData from "@/Interfaces/PaginatedData";
import api from "./api";
import Category from "@/Interfaces/Category";
import Filters from "@/Interfaces/Fetch";

export const profilesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCategories: build.query<PaginatedData<Category>, Filters>({
            query: (params) => ({
                url: "/categories",
                params,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useGetCategoriesQuery, useLazyGetCategoriesQuery } = profilesApi;
