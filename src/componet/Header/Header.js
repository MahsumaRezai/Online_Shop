import { Fragment } from "react";
import logo from '../images/logo.png';
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.img}>
                <img src={logo} alt="m" />
            </div>
        </Fragment>
    )
}
export default Header;