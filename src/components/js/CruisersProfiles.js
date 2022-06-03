import { useState, useEffect } from "react";
import "../css/CruisersProfiles.css";

function CruisersProfiles(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => setCharacters(res), []);
  });

  return (
    <div className="chara-container">
      {characters

        .filter((character) => character.affiliations.includes(props.version))

        .map((character) => {
          if (
            props.version === "Resistance" ||
            !character.affiliations.includes("Resistance")
          ) {
            return (
              <div>
                <div className="chara-img-container">
                  <img
                    className="chara-img"
                    src={character.image}
                    alt={character.name}
                  />
                </div>
                <p className="chara-name">{character.name}</p>
                <a href="#" className="coeur profile-btn" id={character.id}>
                  En savoir plus
                </a>
              </div>
            );
          }
        })}
    </div>
  );
}

export default CruisersProfiles;
