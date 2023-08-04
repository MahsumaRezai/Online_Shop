import { Fragment } from "react";
import { Link } from 'react-router-dom';
import classes from './HeadContents.module.css';

const HeadCotent = (props) => {
    return (
        <Fragment>
            <ul className={classes.links}>
                <div className={classes.content}>
                    <li><Link to='' className={classes.link}>Home</Link></li>
                    <li><Link to='/glasse' className={classes.link}>Our Glasse</Link></li>
                    <li><Link to='/shop' className={classes.link}>Shop</Link></li>
                    <li><Link to='/contact' className={classes.link}>Contact Us</Link></li>
                </div>
            </ul>


        </Fragment>
    )
}
export default HeadCotent;