import {
    ADD_NEW_BOOK_ACTIONTYPE, SET_ADD_BOOK_ERROR_ACTIONTYPE,
    SET_ALL_BOOKS_DATA_ACTIONTYPE,
    SET_BOOKS_GROUPING_TYPE_ACTIONTYPE
} from "./bookActionType";

export const initialState = {
    allBooks: [],
    groupingType: "books",
    addBookError: ""
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
        default: {
            return state;
        }
    }
};

export default bookReducer;