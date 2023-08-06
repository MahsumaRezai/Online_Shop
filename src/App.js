import { Fragment } from "react";
import { Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Producet from "./Pages/Producet";
import ShopProducet from "./Pages/ShopProduct";


function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/glasse" >
        <Producet />

      </Route>
      <Route path="/shop" >
        <ShopProducet />

      </Route>

    </Fragment>

  );
}

export default App;
