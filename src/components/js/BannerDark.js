import '../css/BannerDark.css'
import bannerDarkMontain from '../assets/BannerDark-montain.png'

const BannerDark = () => {
  return (
    <div>
      <div className='banner'>
        <h1>Dark<span></span> Love</h1>
        <img src={bannerDarkMontain} alt="" />
      </div>
    </div>
  )
}


export default BannerDark;