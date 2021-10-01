import React from 'react';
import {getLoginUserRoleSelector, getUserLoggedInSelector} from "../store/reducers/bookReducer/bookSelectors";
import store from "../store/configureStore";
import {validateToken} from "../pages/loginPage/loginThunks";

const ShowForRoles = (WrappedComponent, Roles) => {

    return class extends React.Component {

        render() {
            const role = getLoginUserRoleSelector(store.getState());
            if ((Roles || []).includes(role)) {
                return <WrappedComponent {...this.props}/>
            }

            return null;
        }
    }
};


export default ShowForRoles;