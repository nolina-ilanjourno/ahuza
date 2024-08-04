import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const api = createApi({
    tagTypes: [],
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
    }),
    endpoints: () => ({}),
    refetchOnFocus: true,
});

export default api;
