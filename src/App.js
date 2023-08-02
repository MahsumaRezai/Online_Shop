import { Fragment } from "react";
import {Route} from 'react-router-dom'
import Home from "./Pages/Home";


function App() {
  return (
    <Fragment>
      <Route path="/home" exact>
        <Home/>
      </Route>
     
    </Fragment>

  );
}

export default App;
