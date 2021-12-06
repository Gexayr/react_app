import {HashRouter as Router} from "react-router-dom";
import {App} from "./App";
import React from "react";

export const AppContainer = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}