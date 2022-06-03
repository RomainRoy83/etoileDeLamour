import bannerDarkMontain from '../assets/BannerDark-montain.png'
import bannerLightTree from '../assets/BannerLight-tree.png'

import '../css/Banner.css'  

const Banner = (props) => {
  const { type } = props
  return (
    <div>
      {type === 'dark' && (
        <div className='bannerDark'>
          <h1>Dark<span></span> Love</h1>
          <img src={bannerDarkMontain} alt="" />
        </div>)}
      {type === 'light' && (
        <div className='bannerLight'>
          <h1>May the <span>love be</span>with you</h1>
          <img src={bannerLightTree} alt="" />
        </div>)}
    </div>
  )
}


export default Banner;