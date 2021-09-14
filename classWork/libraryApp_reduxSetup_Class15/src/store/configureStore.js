import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./rootReducer";
import middleWares from "./middlewares";


let enhancers = applyMiddleware(...middleWares);
if (['development', 'qa'].includes(process.env.NODE_ENV)) {
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        trace: true, // (action) => { return ‘trace as string’; }
        traceLimit: 25,
    }) || compose;
    enhancers = composeEnhancer(enhancers);
}

const store = createStore(rootReducer, enhancers);

export default store;