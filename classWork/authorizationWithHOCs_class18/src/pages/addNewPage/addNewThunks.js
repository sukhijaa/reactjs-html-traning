import {setAddNewBookErrorAction, setAllBooksDataAction} from "../../store/reducers/bookReducer/bookActions";

export const addNewBookThunk = (bookData, history) => async (dispatch, getState) => {

    try {
        const response = await fetch("http://localhost:3000/library/new", {

            method: "POST",
            body: JSON.stringify(bookData),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const responseJson = await response.json();
        console.log(responseJson);
        const {isError, errorMessage, books} = responseJson;

        if (isError) {
            dispatch(setAddNewBookErrorAction(errorMessage));
        } else {
            dispatch(setAllBooksDataAction(books));
            history.push("/library");
        }
    } catch (e) {
        console.error(e);
    }
};