import Carrousel from "../components/Carrousel.jsx"
import Collapse from "../components/Collapse.jsx"
import Slideshow from "../components/Slideshow.jsx"
import rentList from "../data/rentList.js"
import { useParams } from "react-router"

function Rent () {
  const {id} = useParams()
  const currentRent = rentList.find(rent => rent.id === id)
  const stars = [1, 2, 3, 4, 5]
  if (!currentRent) {
    return <div>Location introuvable</div>
  }
  return (
    <main className="rent">
      <Slideshow 
        picture={currentRent.pictures} 
        className="rent__slideshow"
      />
      <div className="rent__content">
        <div className="rent__content__info">
          <div className="rent__content__info__left">
            <div className="rent__content__info__left__text">
              <h1 className="rent__content__info__left__text__title">{currentRent.title}</h1>
              <p className="rent__content__info__left__text__location">{currentRent.location}</p>
            </div>
            <ul className="rent__content__info__left__tags">
              {currentRent.tags.map((tag, index) => (
                <li key={index} className="rent__content__info__left__tags__tag">{tag}</li>
              ))}
            </ul>
          </div>
          <div className="rent__content__info__right">
            <div className="rent__content__info__right__host">
              <div className="rent__content__info__right__host__name">{currentRent.host.name.replace(' ', '\n')}</div>
              <img src={currentRent.host.picture} alt="photo de profil de l'hôte" className="rent__content__info__right__host__picture"/>
            </div>
            <ul className="rent__content__info__right__rate">
              {stars.map((star, id) => (
                <li className="rent__content__info__right__rate__star" key={id}>
                  <svg 
                    width="25" 
                    height="24" 
                    viewBox="0 0 25 24" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className= {star <= currentRent.rating ? "star-active" : "star-inactive"}>
                    <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z"/>
                  </svg>
                </li>              
              ))}
            </ul>
          </div>
        </div>
        <div className="rent__content__details">
          <div className="rent__content__details__item">
            <Collapse 
              title="Description" 
              content={currentRent.description} 
            />
          </div>
          <ul className="rent__content__details__item">
            <Collapse 
              title="Équipements" 
              content={currentRent.equipments.map((equipment, index) => (
                        <li key={index} className="rent__content__details__item__list">{equipment}</li>
                    ))}
            />
          </ul>
        </div>
      </div>
    </main>
  )
}
export default Rent