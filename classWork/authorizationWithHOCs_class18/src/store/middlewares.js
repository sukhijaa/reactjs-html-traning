import thunk from "redux-thunk";

const loggerMiddleware = store => next => action => {
    console.log("Action Fired", action);
    next(action);
};

const deciderMiddleware = store => next => action => {
    if (typeof action.type !== "string") {
        return;
    }
    if (action.type.includes("/")) {
        next(action);
    }
};

const middleWares = [thunk, loggerMiddleware, deciderMiddleware];

export default middleWares;