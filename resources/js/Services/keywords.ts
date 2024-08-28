import Filters from "@/Interfaces/Fetch";
import Keyword from "@/Interfaces/Keyword";
import PaginatedData from "@/Interfaces/PaginatedData";
import api from "./api";

export const keywordsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getKeywords: build.query<PaginatedData<Keyword>, Filters>({
            query: (params) => ({
                url: "/keywords",
                params,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useLazyGetKeywordsQuery } = keywordsApi;
