import { Fragment } from "react";
import image from '../images/shop.png'
import Footer from "../Glasses/Footer";

const ShopInformation = (props) => {
    return (
        <Fragment>
            <div className="content">

                <img src={image} alt='' className='images' />
            </div>
            <Footer />
        </Fragment>
    )
}
export default ShopInformation;