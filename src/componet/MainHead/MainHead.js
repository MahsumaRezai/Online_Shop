import { Fragment } from "react";
import classes from './Main.module.css';
import log from '../images/log.png'

const MainHead = (props) => {
    return (
        <Fragment>
            <main className={classes.main}>
                <div className={classes.content}>
                    <div className={classes.text}>
                        <p className={classes.para}>  Welcome</p>
                        <p className={classes.title}> TO OUR SUNGLASSES</p>
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
