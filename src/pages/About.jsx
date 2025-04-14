import Banner from "../components/Banner"
import bannerImg from "../assets/about-banner-img.png"
import Collapse from "../components/Collapse"
import { aboutData } from "../data/about.js"
import "../styles/styles.scss"


function About () {
    return (
        <main className="about">
            <Banner
                backgroundImage={bannerImg}
            />
            <ul className="about__content">
                {aboutData.map(({id, title, content}) => (
                    <li key={id} className="about__content__item">
                        <Collapse 
                            title={title} 
                            content={content} 
                        />
                    </li>
                ))}
            </ul>
        </main>
    )
}
export default About