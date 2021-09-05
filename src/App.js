import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './pages/NavBar';
import PageNotFound from './pages/PageNotFound';
import StepForms from './task1/StepForms';
import SearchFilter from './task2/SearchFilter';
import Api from './task3/Api';

const App = () => {
    return (
        <Fragment>
            <Router>
                <header>
                    <NavBar />
                </header>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/Stepform" exact>
                        <StepForms />
                    </Route>
                    <Route path="/filters" exact>
                        <SearchFilter />
                    </Route>
                    <Route path="/api" exact>
                        <Api />
                    </Route>
                    <Route path="*">
                        <PageNotFound />
                    </Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App
