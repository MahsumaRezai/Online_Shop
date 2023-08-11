import { Fragment } from "react";
import ShopInformation from "./ShopInformation";
import ShpoText from "./shopText";
import Footer from "../Glasses/Footer";


const Shop = (props) => {
    return (
        <Fragment>
            <ShpoText />

            <ShopInformation />
            <Footer/>

        </Fragment>
    )
}
export default Shop;