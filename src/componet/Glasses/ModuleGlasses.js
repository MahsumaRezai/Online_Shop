
import ReactDom from 'react-dom';
import Card from '../Module/Card';
import classes from './ModuleGlasses.module.css';
import { Fragment } from 'react';
const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onconfirm} />
}
const Modaloerlay = (props) => {
    return (
        <Card className={classes.modal}>
            <div className={classes.TextContent}>

                <h1>Wearing Sunglasses</h1>
                <p className={classes.text}> The sun’s rays give life to our planet, but they can be blinding to your eyes.<br></br>
                    If your eyes are sensitive to light, you may need to squint or hold your hand <br></br>
                    up to block sunlight. That’s not “seeing your best” and could be a safety hazard
                    while driving, riding a bike, or participating in any activity where you’re moving
                fast and making quick decisions. Wear sunglasses to help you see your best and navigate more safely.</p>
            </div>




        </Card>
    )
}
const ModuleGlasses = (props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onconfirm={props.onconfirm} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<Modaloerlay title={props.title} massage={props.massage} onconfirm={props.onconfirm} />,
                document.getElementById('overlay-root'))}
        </Fragment>
    )
}

export default ModuleGlasses;