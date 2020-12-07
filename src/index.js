import "core-js/es";
import "mutation-observer";
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom";
import List from "./components/app.jsx";

ReactDOM.render(<List></List>, document.getElementById("root"));
