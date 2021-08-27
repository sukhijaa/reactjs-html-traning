import {TODO_APP_DATA} from "../utils";
import {createSlice} from '@reduxjs/toolkit';

// const store = {
//     todoData: [], // Needed by page1 i.e. Todo App Page
//     todoDetails: {}, // Needed by Page2 i.e. TodoDetails Page
//     global: {}
// };
//
// export const todoData = createSlice({
//     name: "todoData",
//     initialState: TODO_APP_DATA
// });

export const todoData = (state = TODO_APP_DATA, action) => {
    console.log('Inside todoData reducer', action);
    return state;
};


