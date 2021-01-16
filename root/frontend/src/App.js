import React from "react";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./mainpage/mainpage";
import Errorpage from "./errorpage/errorpage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Mainpage} exact />
        <Route component={Errorpage} />
      </Switch>
    </div>
  );
}

export default App;
