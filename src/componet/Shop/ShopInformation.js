import { Fragment } from "react";
import image from '../images/shop.png'

const ShopInformation = (props) => {
    return (
        <Fragment>
            <div className="content">

                <img src={image} alt='' className='images' />
            </div>
        </Fragment>
    )
}
export default ShopInformation;