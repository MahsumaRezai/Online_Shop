import { Fragment, useState } from "react";
import Head from '../componet/Head/Head';
import MainHead from '../componet/MainHead/MainHead';
import Header from '../componet/Header/Header';
import HeadCotent from '../componet/Header/HeadContent';
import Button from '../componet/Button/Button'
import Module from '../componet/Module/Module';
import Text from "../componet/Glasses/Text";
import Image from "../componet/Glasses/Image";
import Form from "../componet/Contact/Form";
import Footer from "../componet/Glasses/Footer";
import ModuleGlasses from '../componet/Glasses/ModuleGlasses';
import ShpoText from "../componet/Shop/shopText";
import ShopInformation from "../componet/Shop/ShopInformation";
import User from "../componet/User/User";


const Home = (props) => {
    const [card, setCard] = useState(false);
    const form = (event) => {
        event.preventDefault();
        setCard(true);
    }
    const [cardbtn, setCardbtn] = useState(false);
    const formBtn = (event) => {
        event.preventDefault();
        setCardbtn(true);
    }
    return (
        <Fragment>
            <Head />
            <HeadCotent />
            <Header />
            <MainHead />
            <Button onClick={form}>Shop Now</Button>
            {card && <Module />}
            <ShpoText />
            <ShopInformation/>
            <User/>

            <Text />

            <Image />
            <Button onClick={formBtn}>send</Button>
            {cardbtn && <ModuleGlasses />}
            <Form />
            <Footer />









        </Fragment>

    )
}
export default Home;
