import { Fragment } from "react";
import { Link } from 'react-router-dom'

const HeadCotent = (props) => {
    return (
        <Fragment>
            <ul>

                <li><Link to='/home'>Home</Link></li>
                <li><Link to='/glasse'>Our Glasse</Link></li>
                <li><Link to='/shop'>Shop</Link></li>
                <li><Link to='/contact'>Contact Us</Link></li>




            </ul>


        </Fragment>
    )
}
export default HeadCotent;