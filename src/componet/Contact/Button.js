import classes from './Form.module.css'
const Button = (props) => {
    return (
        <button className={classes.btn}>{props.children}</button>
    )

}
export default Button