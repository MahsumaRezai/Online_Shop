import { Fragment } from "react";
import classes from './Text.module.css'
const Text = (props) => {
    return (
        <Fragment>
            <div className={classes.text}>
                <p className={classes.title}>Our Glasses</p>
                <p className={classes.para}>There are some our glasses in ti this page and you can see it.</p>
            </div>
        </Fragment>
    )
}
export default Text;