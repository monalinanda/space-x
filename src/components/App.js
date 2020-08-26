import React from "react";
import SpaceXHistory from "./SpaceXHistory/SpaceXHistory";
import spaceXPayloads from "./SpaceXPayloads/SpaceXPayloads";
import Homepage from "./Homepage";
import Header from "./Navbar/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage}></Route>
            <Route
              path="/spaceX/history"
              exact
              component={SpaceXHistory}
            ></Route>
            <Route
              path="/spaceX/payloads"
              exact
              component={spaceXPayloads}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
