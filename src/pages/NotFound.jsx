import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect } from "react";

function NotFound() {
  useEffect(() => {
      document.title = "Erreur"
  });
  
  return (
    <>
      <Header />
      <main className="notfound">
        <h1 className="notfound__title">404</h1>
        <p className="notfound__text">Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/home" className="notfound__link">Retourner sur la page d'accueil</Link>
      </main>
      <Footer />
    </>
  );
}
export default NotFound;