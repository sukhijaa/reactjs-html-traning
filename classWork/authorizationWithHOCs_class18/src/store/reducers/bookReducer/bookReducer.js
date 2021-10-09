import {
    ADD_NEW_BOOK_ACTIONTYPE,
    SET_ADD_BOOK_ERROR_ACTIONTYPE,
    SET_ALL_BOOKS_DATA_ACTIONTYPE,
    SET_BOOKS_GROUPING_TYPE_ACTIONTYPE,
    SET_LOGIN_ERROR_ACTIONTYPE, SET_LOGIN_ROLE_ACTIONTYPE,
    SET_USER_LOGGED_IN_ACTIONTYPE,
    SET_USER_LOGGED_OUT_ACTIONTYPE
} from "./bookActionType";

export const initialState = {
    allBooks: [],
    groupingType: "books",
    addBookError: "",
    isLoggedIn: false,
    loginToken: "",
    loginError: "",
    role: "",
    loginTime: 0
};

const bookReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case SET_BOOKS_GROUPING_TYPE_ACTIONTYPE: {
            const newState = {...state};
            newState.groupingType = payload;
            return newState;
        }
        case SET_ALL_BOOKS_DATA_ACTIONTYPE: {
            const newState = {...state};
            newState.allBooks = payload;
            return newState;
        }
        case ADD_NEW_BOOK_ACTIONTYPE: {
            const newState = {...state};
            newState.allBooks.push(payload);
            return newState;
        }
        case SET_ADD_BOOK_ERROR_ACTIONTYPE: {
            const newState = {...state};
            newState.addBookError = payload;
            return newState;
        }
        case SET_USER_LOGGED_IN_ACTIONTYPE: {
            const newState = {...state};
            newState.isLoggedIn = true;
            newState.loginToken = payload;
            if (state.isLoggedIn !== newState.isLoggedIn) {
                newState.loginTime = new Date().getTime();
            }
            return newState;
        }
        case SET_USER_LOGGED_OUT_ACTIONTYPE: {
            localStorage.removeItem("authToken");
            return {...initialState};
        }
        case SET_LOGIN_ERROR_ACTIONTYPE: {
            const newState = {...state};
            newState.loginError = payload;
            newState.isLoggedIn = false;
            newState.loginToken = "";
            return newState;
        }
        case SET_LOGIN_ROLE_ACTIONTYPE: {
            return {...state, role: payload};
        }
        default: {
            return state;
        }
    }
};

export default bookReducer;