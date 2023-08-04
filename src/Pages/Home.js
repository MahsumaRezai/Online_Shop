import { Fragment, useState } from "react";
import Head from '../componet/Head/Head';
import MainHead from '../componet/MainHead/MainHead';
import Header from '../componet/Header/Header';
import HeadCotent from '../componet/Header/HeadContent';
import Button from '../componet/Button/Button'
import Module from '../componet/Module/Module'

const Home = (props) => {
    const [card, setCard] = useState(false);
    const form = (event) => {
        event.preventDefault();
        setCard(true);
    }
    return (
        <Fragment>
            <Head />
            <HeadCotent />
            <Header />
            <MainHead />
            <Button onClick={form}>Shop Now</Button>
            {card && <Module />}


        </Fragment>

    )
}
export default Home;
