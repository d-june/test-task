import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostType } from '../../../entities/Post/model/types'


const initialState = {
    posts: [] as PostType[]
} 

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts (state, action: PayloadAction<PostType[]>)  {
      let newPosts: PostType[] = []
      if(state.posts.length > 8 ) {
        newPosts = action.payload.filter((post, index) => {
            return state.posts[index].id !== post.id
        })
        state.posts = [...state.posts, ...newPosts]
      } else {
        state.posts = action.payload
      }
    }  
  },
})

export const {setPosts} = postsSlice.actions
export default postsSlice.reducer