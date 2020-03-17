import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./Login";
import UsersList from "./UsersList";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <Route path="/usersList" component={UsersList} />
    </Router>
  );
};
export default App;

//   <Route path="/" exact component={Login} />
//   <Route path="/usersList" component={UsersList} />
