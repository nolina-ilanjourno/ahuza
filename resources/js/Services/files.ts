import type File from "@/Interfaces/File";
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
    }),
    overrideExisting: true,
});

export const { useStoreFileMutation } = filesApi;
