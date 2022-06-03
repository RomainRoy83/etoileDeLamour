import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const DisplayCard = () => {
	const [character, setCharacter] = useState({})
	const [isLoad, setIsLoad] = useState(false)
	const params = useParams()

	useEffect(() => {
		const id = params.id
		fetch(`https://miadil.github.io/starwars-api/api/id/${id}.json`)
			.then((res) => res.json())
			.then((res) => console.log(res) || setCharacter(res) || setIsLoad(true))
	}, [])
	
	return (isLoad && <div className="profile-card" key={character.id}>
			<h3>Nom : {character.name}</h3>
			<h4>Taille : {character.height}</h4>
			<h4>Poids : {character.mass}</h4>
			<h4>Genre : {character.gender}</h4>
			<h4>Patrie :{character.homeworld}</h4>
			<h4>Wikipedia :{character.wiki}</h4>
			<a href={character.wiki}>Page Wikipedia</a>
			<h4>Date de naissance :{character.born}</h4>
			<h4>Lieu de Naissance :{character.bornLocation}</h4>
			<h4>Espèce :{character.species}</h4>
			<h4>Couleur de cheveux :{character.hairColor}</h4>
			<h4>Couleur des yeux :{character.eyeColor}</h4>
			<h4>Couleur de peau :{character.skinColor}</h4>
			{/* <h4>Affiliations :{character.affiliations}</h4> */}
			{/* <h4>Maîtres :{character.masters}</h4> */}
			<h4>Affiliations : <ul>{character.affiliations.map((affil) => <li>{affil}</li> )}</ul></h4> 
		</div>
		// <div className=" profile-card inactif" >
          // </div > 
					)
}

export default DisplayCard