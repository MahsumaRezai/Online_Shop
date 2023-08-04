import { Fragment, useState } from "react";
import classes from './Image.module.css';
import imag1 from '../images/glass1.png';
import image2 from '../images/glass2.png';
import image3 from '../images/glass5.png';
import image4 from '../images/glass4.png';
import ModuleGlasses from "./ModuleGlasses";




const Image = (props) => {
    const [cart, setCart] = useState(false);
    const cartHandler = (event) => {
        event.preventDefault();
        setCart(true);

    }

    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.cart} onClick={cartHandler}>
                    <img src={imag1} alt="" />
                    <p>$50</p>
                    <p className={classes.title}>Sunglasses</p>
                    {cart && <ModuleGlasses />}

                </div>
                <div className={classes.cart}>
                    <img src={image2} alt="" />
                    <p>$60</p>
                    <p className={classes.title}>Sunglasses</p>
                </div>
                <div className={classes.cart}>
                    <img src={image3} alt="" />
                    <p>$60</p>
                    <p className={classes.title}>Sunglasses</p>
                </div>
                <div className={classes.cart}>
                    <img src={image4} alt="" />
                    <p>$80</p>
                    <p className={classes.title}>Sunglasses</p>
                </div>
            </div>

        </Fragment>
    )
}
export default Image