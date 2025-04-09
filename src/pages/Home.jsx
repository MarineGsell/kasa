import { Link } from "react-router"

function Home () {
    return (
        <div>
            <h1>Bienvenue sur mon site</h1>
            <p>Voici la page d'accueil</p>
            <Link to="/location">Voici une location</Link>
        </div>
    )
}
export default Home