import classes from './Foooter.module.css';
import { Link } from 'react-router-dom'
const Footer = (props) => {
    return (
        <div className={classes.footer}>
             <Link to='' className={classes.link}>mahsuma.rezai8@gmail.com</Link> 
           

        </div>
    )
}
export default Footer;