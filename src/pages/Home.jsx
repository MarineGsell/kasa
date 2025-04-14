import { Link } from "react-router"
import Banner from "../components/Banner.jsx"
import Card from "../components/Card.jsx"
import { rentList } from "../data/rentList.js"
import bannerImg from "../assets/home-banner-img.png"
import "../styles/styles.scss"

function Home () {
    return (
        <main className="home">
            <Banner 
            backgroundImage={bannerImg}
            title="Chez vous, partout et ailleurs"
            />
            <ul className="home__content">
                {rentList.map(({title, id, cover}) => (
                    <li key={id}>
                        <Card 
                            titleRent={title}
                            cover={cover}
                            id={id}
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default Home