import { Link } from "react-router";

function Card ({titleRent, cover, id}) {
    return (
        <div className="home__content__card" style={{ backgroundImage: `url(${cover})`}}>
            <Link to={`/location/${id}`} className="home__content__card__overlay">
                <h2 className="home__content__card__overlay__title">{titleRent}</h2>
            </Link>
        </div>
    )
}

export default Card