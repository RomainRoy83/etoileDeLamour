import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/CruisersProfiles.css";

function CruisersProfiles(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setCharacters(res), []);
  });

  // const profileBtn = document.querySelector(".profile-btn");

  const handleClick = (elt) => {
    const profile = document.getElementById(elt);
    profile.classList.toggle("inactif");
  };

  return (
    <div className="container-global">
      <h1 class = "cruiser-title">Vous aurez la chance de partager votre croisière avec...</h1>
      <div className="chara-container">
        {characters

          .filter((character) => character.affiliations.includes(props.version))

        .map((character, index) => {
        if (
        props.version === "Resistance" ||
        !character.affiliations.includes("Resistance")
        ) {
    
         return (
         <div key={index}>
            <div className="chara-img-container">
            <img
            className="chara-img"
            src={character.image}
            alt={character.name}
            />
            </div>
            <p className="chara-name">{character.name}</p>
            <Link to={`/LightSide/${character.id}`} className="coeur profile-btn">

            En savoir plus
          </Link>
           

           {/* <div className=" profile-card inactif" id={character.id}>
              <h3>Nom : {character.name}</h3>
              <h4>Taille : {character.height}</h4>
              <h4>Poids : {character.mass}</h4>
              <h4>Genre : {character.gender}</h4>
              <h4>Patrie :{character.homeworld}</h4>
              <h4>Wikipedia :{character.wiki}</h4>
              <a href="{character.wiki}">Page Wikipedia</a>
              <h4>Date de naissance :{character.born}</h4>
              <h4>Lieu de Naissance :{character.bornLocation}</h4>
              <h4>Espèce :{character.species}</h4>
              <h4>Couleur de cheveux :{character.hairColor}</h4>
              <h4>Couleur des yeux :{character.eyeColor}</h4>
              <h4>Couleur de peau :{character.skinColor}</h4>
              <h4>Affiliations :{character.affiliations}</h4>
              <h4>Maîtres :{character.masters}</h4>
              <h4>{character.formerAffiliations}</h4>
           </div> */}
          </div>
          )
        }
        })}
      </div>
      </div>
  );
}

export default CruisersProfiles;
