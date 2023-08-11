import { Fragment } from "react";
import classes from './Form.module.css'

const Form = (props) => {
    return (
        <Fragment>
            <form className={classes.form}>
                <div className="label">
                    <label htmlFor="name">Name</label>

                </div>
                <input id="name" />

                <label htmlFor="number"> Phone Number</label>
                <input id="number" />

                <label htmlFor="Email">Email</label>
                <input id="email" />

                <label htmlFor="massage">Massage</label>
                <input id="massage" />
                <button className={classes.btn}>send</button>

            </form>
        </Fragment>
    )
}
export default Form;