import { Fragment } from "react";
import classes from './HeadProduct.module.css'
import HeadCotent from './HeadContent';

const HeadProduct = (props) => {
    return (
        <Fragment>
            <div className={classes.head}>
            <HeadCotent/>
            
            </div>

        </Fragment>
    )
}
export default HeadProduct