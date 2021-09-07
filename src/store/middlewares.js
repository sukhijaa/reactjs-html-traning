import thunk from "redux-thunk";

const loggerMiddleware = store => next => action => {
    console.log("this is my middleware", action);
    next(action);
};

const deciderMiddleware = store => next => action => {
    console.log("this is decider middle");
    if (typeof action.type !== "string") {
        return;
    }
    if (action.type.includes("/")) {
        next(action);
    }
};

const middleWares = [thunk, loggerMiddleware, deciderMiddleware];

export default middleWares;