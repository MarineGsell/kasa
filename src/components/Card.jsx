import { Link } from "react-router";

function Card ({titleRent, id}) {
    return (
        <Link to={`/location/${id}`} className="home__content__card__overlay">
            <h2 className="home__content__card__overlay__title">{titleRent}</h2>
        </Link>
    )
}

export default Card