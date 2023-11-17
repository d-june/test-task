import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostType } from '../../../entities/Post/model/types'

export const postsApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: (build) => ({
    getAllPosts: build.query<PostType[], {limit:number, start:number}>({
      query: ({limit = 10, start}) => `posts?_limit=${limit}&_start=${start}`,
    }),
  }),
  
})

export const {useGetAllPostsQuery} = postsApi