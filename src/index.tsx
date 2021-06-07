import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Providers from "./contexts/Providers";

import App from "./App";
import "./index.css";

ReactDOM.render(
  <Router>
    <Providers>
      <App />
    </Providers>
  </Router>,
  document.getElementById("root")
);
