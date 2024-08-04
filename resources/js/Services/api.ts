import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        prepareHeaders: (headers) => {
            const token = document.head.querySelector(
                'meta[name="csrf-token"]'
            ) as HTMLMetaElement;

            if (token) {
                headers.set("X-CSRF-TOKEN", token.content);
            }

            return headers;
        },
    }),
    endpoints: () => ({}),
    refetchOnFocus: true,
});

export default api;
