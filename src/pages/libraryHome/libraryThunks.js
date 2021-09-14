import {setAllBooksDataAction} from "../../store/reducers/bookReducer/bookActions";
import {BOOK_MASTER} from "../../utils";

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
    const data = await fetch("https://www.google.com/search?q=react");
    console.log("Fetched All Books Data", data);
    const allBooks = BOOK_MASTER;
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
