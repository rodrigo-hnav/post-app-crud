import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000"
    }),
    endpoints: (builder)=> ({
        getPosts: builder.query({
            query: ()=> "/posts",
            providesTags: ['Posts'],
        }),

        createPost: builder.mutation({
            query: (newPost) =>({
                url: '/post',
                method: 'POST',
                body: newPost,
            }),
            invalidatesTags: ["Posts"],
        }),

        deletePost: builder.mutation({
            query: (id)=> ({
                url: `/post/${id}`,
                method: 'DELETE',
            }),
  
            invalidatesTags: ["Posts"],
        })
        
    }),


})

export const { useGetPostsQuery, useCreatePostMutation, useDeletePostMutation} = apiSlice