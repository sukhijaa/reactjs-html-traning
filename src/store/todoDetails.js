import {createSlice} from '@reduxjs/toolkit';
import {TODO_APP_DATA} from "../utils";

// const store = {
//     todoData: [], // Needed by page1 i.e. Todo App Page
//     todoDetails: {}, // Needed by Page2 i.e. TodoDetails Page
//     global: {}
// };

// export const todoDetails = createSlice({
//     name: "todoDetails",
//     initialState: {}
// });

const ACTION_TYPE = {
    UPDATA_TODO_ID: "updateTodoID"
};

export const updateTodoIdAction = (id) => {
    return {
        type: ACTION_TYPE.UPDATA_TODO_ID,
        payload: id
    }
};

// todoDetails reducer
export const todoDetails = (state = {}, action) => {
    console.log('Inside todoDetails reducer', action);
    switch (action.type) {
        case ACTION_TYPE.UPDATA_TODO_ID: {
            const newState = {...state};
            newState.activeId = action.payload;
            return newState;
        }
        default:
            return state;
    }
};
