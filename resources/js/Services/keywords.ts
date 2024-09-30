import Filters from "@/Interfaces/Fetch";
import Keyword from "@/Interfaces/Keyword";
import KeywordGroup from "@/Interfaces/KeywordGroup";
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
        getKeywordGroups: build.query<PaginatedData<KeywordGroup>, Filters>({
            query: (params) => ({
                url: "/keyword-groups",
                params,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useLazyGetKeywordsQuery, useLazyGetKeywordGroupsQuery } =
    keywordsApi;
