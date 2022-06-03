import '../css/style-homepage-banner.css';
import milleniumFalcon from '../assets/mf.png';

const HomepageBanner = () => {
    return (
        <div>
            <div className='banner'>
                <h1>L'étoile <span>de</span> l'Amour</h1>
                <img src={milleniumFalcon} />
            </div>
        </div>
    )
};

export default HomepageBanner;