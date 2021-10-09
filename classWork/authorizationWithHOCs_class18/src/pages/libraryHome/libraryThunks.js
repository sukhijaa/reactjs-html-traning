import {setAllBooksDataAction} from "../../store/reducers/bookReducer/bookActions";

export const testerThunk = (data) => (dispatch, getState) => {
    console.log("Inside Thunk", data);
    fetch("https://www.google.com/search?q=react").then(response => {
        console.log(response);
        dispatch({type: "app/TESTER"});
    });
    // setTimeout(() => {
    //     dispatch({type: "app/TESTER"});
    // }, 3000);
};

export const getAllBooksDataThunk = () => async (dispatch, getState) => {
    // Fetch Books Data from Backend
    console.log("Starting to Fetch All Books Data");
    var allBooks = [];
    try {
        const response = await fetch("http://localhost:3000/library/all");
        allBooks = await response.json();
        console.log("Fetched All Books Data", allBooks);
    } catch (e) {
        console.error(e);
    }
    dispatch(setAllBooksDataAction(allBooks));

    // return new Promise(resolve => {
    //     setTimeout(() => {
    //         // Populate this data into store
    //         console.log("Books data fetched");
    //         const allBooks = BOOK_MASTER;
    //         dispatch(setAllBooksDataAction(allBooks));
    //         resolve();
    //     }, 3000);
    // })
};
