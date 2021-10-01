import {
  setLoginErrorAction,
  setLoginRoleAction,
  setUserLoggedInAction
} from "../../store/reducers/bookReducer/bookActions";

export const handleUserLogin = (formData, history) => async (dispatch) => {
  const loginData = {
    userName: formData.email,
    password: formData.password
  };

  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  const responseJson = await response.json();
  console.log(responseJson);
  const {isError, errorMessage, loggedInDetails} = responseJson;

  if (isError) {
    localStorage.setItem("authToken", "");
    dispatch(setLoginErrorAction(errorMessage));
  } else {
    const {token, role} = loggedInDetails;
    localStorage.setItem("authToken", token);
    dispatch(setUserLoggedInAction(token));
    dispatch(setLoginRoleAction(role));
    history.push("/library");
  }
};

export const validateToken = (token, history) => async (dispatch) => {
  const loginData = {
    token
  };

  const response = await fetch("http://localhost:3000/users/validateToken", {
    method: "POST",
    body: JSON.stringify(loginData),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });

  const responseJson = await response.json();
  console.log(responseJson);
  const {isError, errorMessage, loggedInDetails} = responseJson;

  if (isError) {
    dispatch(setLoginErrorAction(errorMessage));
    localStorage.setItem("authToken", "");
    history.push("/library/login");
  } else {
    const {token, role} = loggedInDetails;
    localStorage.setItem("authToken", token);
    dispatch(setLoginRoleAction(role));
    dispatch(setUserLoggedInAction(token));
  }
};