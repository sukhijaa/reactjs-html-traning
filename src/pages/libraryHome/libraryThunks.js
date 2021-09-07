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
