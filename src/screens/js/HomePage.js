import Activities from "../../components/js/Activities";
import HomepageBanner from "../../components/js/HomepageBanner";
import Questions from "../../components/js/Questions";
import "../css/HomePage.css";
import "../../components/js/HomepageBanner"


const Home = () => {
  return (
    <>
    <HomepageBanner/>
    <div className="crawl">
          <div className="title">
            <p>Votre destinée vous attend!</p>
            <h1>L'Etoile de l'Amour est là!</h1>
          </div>

          <p>
            Tout comme sa grande sœur, l’Étoile de l’Amour frappe toujours
            juste. Trouvez cet être spécial qui manque à votre vie.
          </p>
          <p>
            Que vous soyez en quête d’un beau marchand Hutt, d’un chasseur de
            primes Twi’lek ou d’un Jedi humain, l’étoile de l’amour fera
            exploser votre cœur d’émotion.
          </p>
          <p>
            L’amour n’a pas de frontière, pas même celle de la bordure
            extérieure...
          </p>
          
          
        </div>
        <div className ="quiz">
          <Questions />
        </div>
      <Activities />
    </>
  );
};

export default Home;
