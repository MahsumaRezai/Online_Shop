import Head from "../Head/Head";
import HeadProduct from "./HeadProduct";
import Headers from './Headers';
import Text from '../Glasses/Text';
import Image from '../Glasses/Image'
import Button from "../Glasses/Button";
import { useState } from 'react'
import ModuleGlasses from "../Glasses/ModuleGlasses";

const Product = (props) => {
    const [card, setCard] = useState(false);
    const form = (event) => {
        event.preventDefault();
        setCard(true);
    }
    return (
        <div>
            <Head />
            <HeadProduct />
            <Headers />
            <Text />
            <Image />
            <Button onClick={form}>send</Button>
            {card && <ModuleGlasses />}








        </div>
    )
}
export default Product;