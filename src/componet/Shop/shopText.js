import { Fragment } from "react";
import classes from './ShpoText.module.css'

const ShpoText = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.text}>
                    <h1 className={classes.title}>Best SunGlasses At Our shop</h1>
                    <p className={classes.para}>The sun’s rays give life to our planet, but they can be blinding to your eyes.<br></br>
                        If your eyes are sensitive to light, you may need to squint or hold your hand up <br></br>to block sunlight.
                         That’s not “seeing your best” and could be a safety hazard while driving,<br></br> riding a bike,
                          or participating in any activity where you’re moving fast and making quick decisions. <br></br>
                        Wear sunglasses to help you see your best and navigate more safely. You could prevent <br></br>
                        severe injury to yourself or others.</p>
                </div>
            </div>

        </Fragment>

    )
}
export default ShpoText;