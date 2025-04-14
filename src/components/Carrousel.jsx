import arrowB from "../assets/arrow-back.png"
import arrowF from "../assets/arrow-forward.png"

function Carrousel () {
    return (
        <div className="carrousel">
            <img src={arrowB} alt="flèche précédente"/>
            <img src={arrowF} alt="flèche suivante"/>
        </div>
    )
}
export default Carrousel;