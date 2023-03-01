import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsAPI = createApi({
  reducerPath: "postsAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),

  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllPostsQuery } = postsAPI;
