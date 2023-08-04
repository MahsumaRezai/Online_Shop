import { Fragment } from "react";
import { Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Producet from "./Pages/Producet";


function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/glasse" >
        <Producet />
      </Route>

    </Fragment>

  );
}

export default App;
