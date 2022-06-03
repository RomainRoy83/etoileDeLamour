import '../css/style-teaser-banner.css';
import poulet from '../assets/poulet.png';


const TeaserBanner = () => {
    return (
        <div>
            <div className='tease-banner'>
                <h1>L'étoile <span>de</span> l'Amour</h1>
                <img src={poulet} />
            </div>
        </div>
    )
};

export default TeaserBanner;