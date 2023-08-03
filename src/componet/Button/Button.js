import { Fragment } from 'react';
import classes from './Button.module.css'
const Button = (props) => {

    return (
        <Fragment>
            <div className={classes.button}>
                <form >
                    <button className={classes.btn}>{props.children}</button>

                </form>
            </div>
        </Fragment>

    )
}
export default Button;
