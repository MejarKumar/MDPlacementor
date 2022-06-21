import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
, rootElement);
