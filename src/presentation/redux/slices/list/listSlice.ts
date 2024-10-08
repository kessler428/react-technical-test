import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserInterface } from "../../../../domain/interfaces/UserInterface";


const initialState = {
    listSlice: [] as UserInterface[],
    isCreatedUser: false,
    hasFailedToLoad: false,
}

export const listSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addListOfUsers: (state, action: PayloadAction<UserInterface[]>) => {
            state.listSlice = action.payload;
        },
        updateCreatedUserState: (state, action: PayloadAction<boolean>) => {
            state.isCreatedUser = action.payload;
        },
        updateFailedState: (state, action: PayloadAction<boolean>) => {
            state.hasFailedToLoad = action.payload;
        },
    },
});

export const { addListOfUsers, updateCreatedUserState, updateFailedState } = listSlice.actions;