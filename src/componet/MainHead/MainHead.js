import { Fragment } from "react";
import classes from './Main.module.css';
import log from '../images/log.png'

const MainHead = (props) => {
    return (
        <Fragment>
            <main className={classes.main}>
                <div>
                    <div>
                     <p>  Welcome</p>  
                     <p> TO OUR SUNGLASSES</p>
                    </div>
                    <div>
                        <img src={log} alt="log" />
                    </div>
                </div>

            </main>
        </Fragment>
    )
}
export default MainHead;
