import { configureStore } from '@reduxjs/toolkit'
import { postsApi } from '../../widgets/PostsList/api'
import { postApi } from '../../entities/PostFull/api'
import postsSlice from '../../widgets/PostsList/redux/slice'


export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    postsSlice: postsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware, postApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>;