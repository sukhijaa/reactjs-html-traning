import {setUserLoggedInAction} from "../../store/reducers/bookReducer/bookActions";

export const handleUserLogin = (formData, history) => (dispatch) => {
  console.log(formData);
  dispatch(setUserLoggedInAction("myToken"));
  history.push("/library");
};