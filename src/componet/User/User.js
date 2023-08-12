import { Fragment } from 'react';
import classes from './User.module.css';
import img from '../images/our.png'
const User = (props) => {
    return (
        <Fragment>
            <div className={classes.content}>
                <div className={classes.text}>
                    <h2> What say our clients  </h2>
                    <p> The sun’s rays give life to our planet, but they can be blinding to your eyes.</p>
                </div>

                <div className={classes.main}>
                    <div className={classes.img}>
                        <img alt="" src={img} className={classes.imge} />


                    </div>


                    <p className={classes.para}>if your eyes are sensitive to light, you may need to squint or hold your hand up<br></br>
                        to block sunlight. That’s not “seeing your best” and could be a safety hazard while driving,<br></br>
                        riding a bike, or participating in any activity where you’re moving fast and making quick decisions.<br></br>
                        Wear sunglasses to help you see your best and navigate more safely.
                         </p>


                </div>

            </div>

        </Fragment>

    )
}
export default User;