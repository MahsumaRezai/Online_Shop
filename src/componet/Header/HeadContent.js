import { Fragment } from "react";
import { Link } from 'react-router-dom'

const HeadCotent = (props) => {
    return (
        <Fragment>
            <ul>
                <li><Link to='/home'>Home</Link></li>

            </ul>


        </Fragment>
    )
}
export default HeadCotent;