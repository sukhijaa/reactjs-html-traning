import {initialState} from "./bookReducer";

export const getAllBooksData = (store) => store.booksData.allBooks || initialState.allBooks;

export const getBooksGroupingTypeSelector = (store) => store.booksData.groupingType || initialState.groupingType;

export const getAddNewBookErrorSelector = (store) => store.booksData.addBookError || initialState.addBookError;

export const getBookById = (store, id) => {
    const allBooks = getAllBooksData(store);
    return allBooks.find(book => book.id === id)
};

export const getUserLoggedInSelector = (store) => store.booksData.isLoggedIn || initialState.isLoggedIn;
export const getUserLoggedInTokenSelector = (store) => store.booksData.loginToken || initialState.loginToken;
export const getLoginErrorMessageSelector = (store) => store.booksData.loginError || initialState.loginError;
export const getLoginUserRoleSelector = (store) => store.booksData.role || initialState.role;
export const getLoginTimeSelector = (store) => store.booksData.loginTime || initialState.loginTime;