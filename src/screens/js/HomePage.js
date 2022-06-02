import { Link } from "react-router-dom";
import { HomeCss } from "../css/HomePage.css";

const Home = () => {
  return (
  <>
<section class="star-wars">

<div class="crawl">
  
  <div class="title">
    <p>Votre destinée vous attend!</p>
    <h1>L'Etoile de l'Amour est là!</h1>
  </div>
  
    <p>Tout comme sa grande sœur, l’Étoile de l’Amour frappe toujours juste. Trouvez cet être spécial qui manque à votre vie.</p>     
    <p>Que vous soyez en quête d’un beau marchand Hutt, d’un chasseur de primes Twi’lek ou d’un Jedi humain, l’étoile de l’amour fera exploser votre cœur d’émotion.</p>
    <p>L’amour n’a pas de frontière, pas même celle de la bordure extérieure...</p>
    <img src="https://cdn.pixabay.com/photo/2020/02/07/19/05/spaceship-4828098_960_720.jpg" alt="Vaisseau"/>
  </div>   
</section>
<section>
<div>
    <h1>Notre Questionnaire de l'amour</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p> 
      <p>standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      <p> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,</p>
      <p>and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    
  </div>
  
</section>
</>
  );
};

export default Home;
