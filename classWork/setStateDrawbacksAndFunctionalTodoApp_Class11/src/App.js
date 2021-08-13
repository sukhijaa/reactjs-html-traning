import React from 'react';
import MyFirstComponent from "./MyFirstComponent";
import {Router, Link, BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import {TestPage, TodoApp, HomePage, TodoDetails} from "./pages";

export default class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Link to={"/test/home"}>Take me to Test home</Link>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Link to={"/todo"}>Take me to ToDo</Link>
                    <Switch>
                        <Route path={"/"} exact component={HomePage}/>
                        <Route path={"/todo"} exact component={TodoApp}/>
                        <Route path={"/todo/details"} exact component={TodoDetails}/>
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