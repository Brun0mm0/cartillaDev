import { reqResApi } from "../../../api/reqres";
import { fetchUsers, fetchUsersSuccess, fetchUsersError } from "./ReqResSlice.js";

export const findUsers = (dni) => async (dispatch) => {
    console.log(`numero de documento: ${dni}`);
    try {
        dispatch(fetchUsers());
        const response = await reqResApi.get(`/users/${dni}`);
        dispatch(fetchUsersSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchUsersError(error.message));
    }
};