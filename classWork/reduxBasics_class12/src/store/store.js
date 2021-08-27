import {configureStore} from "@reduxjs/toolkit";
import {todoData} from "./todoData";
import {todoDetails} from "./todoDetails";

export default configureStore({
    reducer: {
        todoData,
        todoDetails
    }
});