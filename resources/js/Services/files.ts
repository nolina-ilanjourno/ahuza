import Filters from "@/Interfaces/Fetch";
import type File from "@/Interfaces/File";
import PaginatedData from "@/Interfaces/PaginatedData";
import api from "./api";

export const filesApi = api.injectEndpoints({
    endpoints: (build) => ({
        storeFile: build.mutation<File, FormData>({
            query: (body) => ({
                url: "/files",
                method: "POST",
                body,
            }),
        }),
        getFiles: build.query<PaginatedData<File>, Filters>({
            query: (params) => ({
                url: "/files",
                params,
            }),
        }),
    }),
    overrideExisting: true,
});

export const { useStoreFileMutation, useLazyGetFilesQuery } = filesApi;
