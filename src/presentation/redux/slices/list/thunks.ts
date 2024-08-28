import { Dispatch } from "@reduxjs/toolkit";
import { updateFailedState, updateCreatedUserState } from "./listSlice";
import GetAllUsers from "../../../../domain/useCases/getAllUsers";


export const fetchUsers = (
    name: string,
    lastName: string,
    email: string
    ) => async (dispatch: Dispatch) => {

    try {

        await new GetAllUsers().createUser(name, lastName, email);

        dispatch(updateCreatedUserState(true));

    } catch (error) {
        dispatch(updateFailedState(true));
    }
}