import { Fragment } from "react";
import HeadProduct from "../Product/HeadProduct";
import Headers from "../Product/Headers";
import Form from "./Form";
import Footer from "../Glasses/Footer";
const Contac = (props) => {
    return (
        <Fragment>
            <HeadProduct />
            <Headers />
            <Form/>
            <Footer/>

        </Fragment>
    )
}
export default Contac;