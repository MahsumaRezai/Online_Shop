import { Fragment } from "react";
import ShopInformation from "./ShopInformation";
import ShpoText from "./shopText";
import Footer from "../Glasses/Footer";
import User from "../User/User";


const Shop = (props) => {
    return (
        <Fragment>
            <ShpoText />

            <ShopInformation />
            <User/>
            <Footer/>

        </Fragment>
    )
}
export default Shop;