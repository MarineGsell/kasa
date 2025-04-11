import { Link } from "react-router"
import Banner from "../components/Banner.jsx"
import bannerImg from "../assets/home-banner-img.png"
import "../styles/home.scss"

function Home () {
    return (
        <main>
            <Banner 
            backgroundImage={bannerImg}
            title="Chez vous, partout et ailleurs"
            />
            <section className="content">
                <Link to="/location" className="content__card">
                    <h2 className="content__card__title">Titre de la location</h2>
                </Link>
                <Link to="/location" className="content__card">
                    <h2 className="content__card__title">Titre de la location</h2>
                </Link>
                <Link to="/location" className="content__card">
                    <h2 className="content__card__title">Titre de la location</h2>
                </Link>
                <Link to="/location" className="content__card">
                    <h2 className="content__card__title">Titre de la location</h2>
                </Link>
                <Link to="/location" className="content__card">
                    <h2 className="content__card__title">Titre de la location</h2>
                </Link>
                <Link to="/location" className="content__card">
                    <h2 className="content__card__title">Titre de la location</h2>
                </Link>
            </section>
        </main>
    )
}
export default Home