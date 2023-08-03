import { Fragment } from "react";
import Head from '../componet/Head/Head';
import MainHead from '../componet/MainHead/MainHead';
import Header from '../componet/Header/Header';
import HeadCotent from '../componet/Header/HeadContent';
import Button from '../componet/Button/Button'

const Home = (props) => {
    return (
        <Fragment>
            <Head />
            <HeadCotent />
            <Header />
            <MainHead />
            <Button>Shop Now</Button>
        </Fragment>

    )
}
export default Home;
