import React from 'react';
import {getUserLoggedInSelector} from "../store/reducers/bookReducer/bookSelectors";
import store from "../store/configureStore";

const RedirectToLogin = (WrappedComponent) => {

    return class extends React.Component {

        constructor(props) {
            super(props);

            this.redirectToLogin();
        }

        componentDidUpdate(prevProps, prevState, snapshot) {
            this.redirectToLogin();
        }

        redirectToLogin = () => {
            const isLoggedIn = getUserLoggedInSelector(store.getState());
            if (!isLoggedIn) {
                this.props.history.push("/library/login");
            }
        };

        render() {
            console.log('RedirectToLogin Props', this.props);
            return <WrappedComponent {...this.props}/>
        }
    }
};


export default RedirectToLogin;