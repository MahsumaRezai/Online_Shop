import { Fragment } from "react";
import { Route } from 'react-router-dom'
import Home from "./Pages/Home";
import Producet from "./Pages/Producet";
import ShopProducet from "./Pages/ShopProduct";
import Contact from "./Pages/Contact";


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
      <Route path="/contact" >
        <Contact />

      </Route>

    </Fragment>

  );
}

export default App;
