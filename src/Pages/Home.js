import { Fragment } from "react";
import Head from '../componet/Head/Head';
import MainHead from '../componet/MainHead/MainHead';
import Header from '../componet/Header/Header';
import HeadCotent from '../componet/Header/HeadContent'

const Home = (props) => {
    return (
        <Fragment>
            <Head />
            <HeadCotent />
            <Header />
            <MainHead />
        </Fragment>

    )
}
export default Home;
