import { Dispatch } from "@reduxjs/toolkit";
import { addListOfUsers, updateFailedState, updateLoadingState } from "./listSlice";
import GetAllUsers from "../../../../domain/useCases/getAllUsers";


export const fetchUsers = () => async (dispatch: Dispatch) => {


    dispatch(updateLoadingState(true));

    try {

        const { newData } = await new GetAllUsers().call()

        dispatch(updateLoadingState(false));

        dispatch(addListOfUsers(newData));

        dispatch(updateFailedState(false));

    } catch (error) {
        dispatch(updateFailedState(true));
    }
}