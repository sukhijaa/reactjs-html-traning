import React from 'react';
import {Router, Link, BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {TestPage, TodoApp, HomePage, TodoDetails, LibraryHome, AddNewPage, LoginPage} from "./pages";

export default class App extends React.Component {

    render() {
        console.log("App is refreshing");
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Link to={"/test/home"}>Take me to Test home</Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to={"/todo"}>Take me to ToDo</Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to={"/library"}>Take me to Library</Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to={"/library/login"}>Take me to Library Login</Link>
                    <Switch>
                        <Route path={"/"} exact component={HomePage}/>
                        <Route path={"/todo"} exact component={TodoApp}/>
                        <Route path={"/todo/details"} exact component={TodoDetails}/>
                        <Route path={"/library/login"} exact component={LoginPage}/>
                        <Route path={"/library"} exact component={LibraryHome}/>
                        <Route path={"/library/new"} exact component={AddNewPage}/>
                        <Route path={"/test"} exact component={TestPage}/>
                        <Route path={"/test/home"} exact>
                            <HomePage/>
                        </Route>
                        <Route path={"/test/*"} exact render={() => <TestPage/>}/>
                        <Route path={"*"} exact component={HomePage}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}