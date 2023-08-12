import { Fragment, useState } from "react";
import classes from './Form.module.css';
import Button from "./Button";


const Form = (props) => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [massage, setMassage] = useState('');

    const [enterPhone, setEnterdPhone] = useState(false);
    const [enterName, setEnterdName] = useState(false);

    const [enterEmail, setEnterdEamil] = useState(false);
    const [enterMassage, setEnterdMassage] = useState(false);




    const FormHandler = (event) => {
        event.preventDefault();
        if (name.trim().length === 0) {
            setEnterdName(true)
        }
        if (phone.trim().length === 0) {
            setEnterdPhone(true)
        }
        if (email.length <= 10) {
            setEnterdEamil(true)


        }
        if (massage.length === 0) {
            setEnterdMassage(true)

        }

    }

    const nameHanlder = (event) => {
        setName(event.target.value);

    }
    const passwordHandler = (event) => {
        setPhone(event.target.value)
    }

    const emailHanlder = (event) => {
        setEmail(event.target.value);

    }
    const massageHandler = (event) => {
        setMassage(event.target.value)
    }
    return (

        <Fragment>

            <form className={classes.form} onSubmit={FormHandler}>
                <h2 className={classes.title}>Contact Us</h2>
                <label>Name</label>
                <input onChange={nameHanlder} />
                {enterName && <p className={classes.text}> Plases Enter your Name</p>}

                <label>Phone Number</label>
                <input onChange={passwordHandler} />
                {enterPhone && <p className={classes.text}>Plases Enter your Phone Number</p>}

                <label>Email</label>
                <input onChange={emailHanlder} />
                {enterEmail && <p className={classes.text}>Your Email Address should be  most 12 </p>}

                <label>Massage</label>
                <input onChange={massageHandler} />
                {enterMassage && <p className={classes.text}>Plases add your massages</p>}


                <Button>Send</Button>

            </form>

        </Fragment>
    )
}
export default Form;