import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { PostType } from './types'

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (build) => ({
  getPostById: build.query<PostType, {id:string | undefined}>({
    query: ({id}) => `posts/${id}`,
  }),
}),
  
})

export const {useGetPostByIdQuery} = postApi