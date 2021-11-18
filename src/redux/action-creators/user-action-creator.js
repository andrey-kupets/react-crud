import { SET_LOADING, SET_ONE_USER, SET_USERS } from "../action-types";
import { userService } from "../../services/UserService";
import { errorsEnum } from "../../errors/errors.enum";


const setLoading = (payload) => ({ type: SET_LOADING, payload });
const setUsers = (payload) => ({ type: SET_USERS, payload });
const setOneUser = (payload) => ({ type: SET_ONE_USER, payload });

const loadUsersData = () => async (dispatch, getState) => {
  const { language } = getState();
  try {
    dispatch(setLoading(true));

    const data  = await userService.getUsers();

    dispatch(setUsers(data));
  } catch (e) {
    console.log(errorsEnum["5000"][language]);
  } finally {
    dispatch(setLoading(false));
  }
};

export {
  setLoading,
  loadUsersData
}
