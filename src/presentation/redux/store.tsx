import { configureStore } from '@reduxjs/toolkit'
import { taskSlice } from './slices/task/taskSlice'
import { listSlice } from './slices/list/listSlice'



export const store = configureStore({
    reducer: {
        tasks: taskSlice.reducer,
        users: listSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch