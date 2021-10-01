import React from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import {getLoginErrorMessageSelector, getUserLoggedInSelector} from "../../store/reducers/bookReducer/bookSelectors";
import {connect} from "react-redux";
import {handleUserLogin} from "./loginThunks";

const mapStateToProps = (store) => ({
    isLoggedIn: getUserLoggedInSelector(store),
    loginError: getLoginErrorMessageSelector(store)
});

const mapDispatchToProps = (dispatch) => ({
    handleLogin: (formData, history) => dispatch(handleUserLogin(formData, history)),
});

@connect(mapStateToProps, mapDispatchToProps)
class Login extends React.Component {

    render() {

        return (
            <div>
                <h1>Please Login into Library App</h1>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 6) {
                            errors.password = 'Password must be atleast 6 digits';
                        }

                        return errors;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        this.props.handleLogin(values, this.props.history);
                        setTimeout(() => {
                            setSubmitting(false);
                        }, 3000);
                    }}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <Field type="email" name="email"/>
                            <ErrorMessage name="email" component="div"/>
                            <Field type="password" name="password"/>
                            <ErrorMessage name="password" component="div"/>
                            <div className={"error-message"}>{this.props.loginError}</div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default Login;