import '../styles/banner.scss'

function Banner ({title,backgroundImage}){
    console.log("Image reçue:", backgroundImage); // Ajoutez ce log pour débug
    return (
        <div className="banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="banner__overlay">
                    <h1 className="banner__overlay__title">{title}</h1>
                </div>
        </div>
    )
}
export default Banner