import React from 'react';
import {getLoginUserRoleSelector, getUserLoggedInSelector} from "../store/reducers/bookReducer/bookSelectors";
import store from "../store/configureStore";
import {validateToken} from "../pages/loginPage/loginThunks";

const RedirectToLogin = (WrappedComponent, AllowedRoles) => {

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
            const userRole = getLoginUserRoleSelector(store.getState());
            const hasToken = localStorage.getItem("authToken");

            if (AllowedRoles && !(AllowedRoles).includes(userRole)) {
                this.props.history.goBack();
            }


            if (isLoggedIn) return;

            if (hasToken) {
                store.dispatch(validateToken(hasToken, this.props.history));
                return;
            }

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