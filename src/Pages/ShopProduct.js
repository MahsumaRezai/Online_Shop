import { Fragment } from "react";
import HeadProduct from "../componet/Product/HeadProduct";
import Headers from '../componet/Product/Headers';
import Shop from "../componet/Shop/Shop";

const ShopProducet = (props) => {

    return (
        <Fragment>
            <HeadProduct />
            <Headers />
            <Shop/>

        </Fragment>
    )

}
export default ShopProducet