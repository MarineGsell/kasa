import Banner from "../components/Banner"
import bannerImg from "../assets/about-banner-img.png"

function About () {
    return (
        <main>
            <Banner
                backgroundImage={bannerImg}
            />
            <section className="content">
                <div className="content__item">
                    <div className="content__item__header">
                        <h2 className="content__item__header__title"></h2>
                        <div className="content__item__header__toggle"></div>
                    </div>
                    <div className="content__item__text">

                    </div>
                </div>
            </section>
        </main>
    )
}
export default About