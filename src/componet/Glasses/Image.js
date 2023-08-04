import { Fragment } from "react";
import classes from './Image.module.css';
import imag1 from '../images/glass1.png';
import image2 from '../images/glass2.png';
import image3 from '../images/glass5.png';
import image4 from '../images/glass4.png';




const Image = (props) => {

    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.cart}>
                    <img src={imag1} alt="" />
                    <p>$50</p>
                    <p>Sunglasses</p>
                </div>
                <div className={classes.cart}>
                    <img src={image2} alt="" />
                    <p>$60</p>
                    <p>Sunglasses</p>
                </div>
                <div className={classes.cart}>
                    <img src={image3} alt="" />
                    <p>$60</p>
                    <p>Sunglasses</p>
                </div>
                <div className={classes.cart}>
                    <img src={image4} alt="" />
                    <p>$60</p>
                    <p>Sunglasses</p>
                </div>
            </div>

        </Fragment>
    )
}
export default Image