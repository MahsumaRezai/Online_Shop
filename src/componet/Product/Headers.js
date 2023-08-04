import { Fragment } from "react";
import logo from '../images/logo.png';

const Headers = (props) => {
    return (
        <Fragment>
            <div className='image'>
                <img src={logo} alt="m" />
            </div>
        </Fragment>
    )
}
export default Headers;