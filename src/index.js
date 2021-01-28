import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Tester1,{Tester2,ForTester,ForLoopTesterallAccess,ForLoopTesterIAccess} from "./tester";


ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Tester1 />, document.getElementById("example"));
ReactDOM.render(<Tester2 />, document.getElementById("example1"));
ReactDOM.render(<ForTester />, document.getElementById("example2"));
ReactDOM.render(<ForLoopTesterallAccess />, document.getElementById("example3"));
ReactDOM.render(<ForLoopTesterIAccess />, document.getElementById("example4"));