import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const users = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/user" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/",
      providesTags: ["Users"],
    }),
    getUserById: builder.query({ query: (id) => `/${id}` }),
    getUserByUpdate: builder.query({
      query: (id) => `/getuserbyupdate/${id}`,
    }),
    createUser: builder.mutation({
      query: (body) => ({
        url: ``,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: builder.mutation({
      query: (body) => ({
        url: `/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useGetUsertByIdQuery,
  useGetUsertByUpdateQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUsertMutation,
} = users;