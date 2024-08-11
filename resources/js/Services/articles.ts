import Article from "@/Interfaces/Article";
import Filters from "@/Interfaces/Fetch";
import PaginatedData from "@/Interfaces/PaginatedData";
import api from "./api";

export const articlesApi = api.injectEndpoints({
    endpoints: (build) => ({
        getArticles: build.query<PaginatedData<Article>, Filters>({
            query: (params) => ({
                url: "/articles",
                params,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useLazyGetArticlesQuery } = articlesApi;
