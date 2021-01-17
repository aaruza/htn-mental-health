import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Mainpage from "./routes/mainpage/mainpage";
import Journal from "./routes/journal/journal";
import Errorpage from "./routes/errorpage/errorpage";

function App() {
  return (
    <Switch>
      <Route path="/" component={Mainpage} exact />
      <Route path="/journal" component={Journal} />
      <Route component={Errorpage} />
    </Switch>
  );
}

export default App;
