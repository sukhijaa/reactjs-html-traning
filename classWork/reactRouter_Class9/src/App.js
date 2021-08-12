import React from 'react';
import MyFirstComponent from "./MyFirstComponent";
import {Router, Link, BrowserRouter} from 'react-router-dom';
import {Route, Switch} from 'react-router';
import TestPage from "./pages/testPage";
import HomePage from "./pages/homePage";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.firstDob = new Date();
        this.secondDob = new Date();
        this.firstchildProps = {name: "First Comp Props - I was rendered by FirstComponent"};
        this.secondChildProps = {name: "First Comp Props - I was rendered by SecondComponent"};

        // Not recommended - Only Variable
        setTimeout(() => {
            console.log("Updating Wrapper");
            this.firstchildProps.name += "Re-Renderedredered";
            this.secondChildProps = {...this.secondChildProps};
            this.setState({});
        }, 2000);
    }

    // Similar to BroswerRouter
    getComponentToRender = () => {
        const queriedPath = window.location.href;
        if (queriedPath.includes("/test")) {
            if (queriedPath.endsWith("/abcd")) {
                return "ABCD Queried";
            }
            return <TestPage/>
        } else if (queriedPath.includes("/home")) {
            return <HomePage/>
        } else {
            return "Not Found";
        }
    };

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Link to={"/test/home"}>Take me to Test home</Link>
                    <Switch>
                        <Route path={"/"} exact component={HomePage}/>
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