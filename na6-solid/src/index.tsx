/* @refresh reload */
import "bootstrap/scss/bootstrap.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.scss";
import { render } from "solid-js/web";
import { Router } from "solid-app-router";
import App from "./App";

render(
    () => (
        <Router>
            <App />
        </Router>
    ),
    document.getElementById("root") as HTMLElement
);
