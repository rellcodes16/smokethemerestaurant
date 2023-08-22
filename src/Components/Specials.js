import './Specials.css'
import ThreeDPlatter from '../Assets/3dplatter.png'
import Teddy from '../Assets/baby-cutout.png'
import Banner from '../Assets/banner.png'
import Comment from '../Assets/comment.png'
import CocaCola from '../Assets/cokecup.png'
import Banner1 from '../Assets/bg1.png'
import Banner2 from '../Assets/bg4.png'

const Specials = () => {
  return (
    <div className='specials-section' id='mySpecials'>
      <h2 className='specials'>Special Offers</h2>
      <div className='specials-container'>
        <img src={Banner1} alt='bg1' className='bg1'/>
        <img src={Banner2} alt='bg2'className='bg2'/>
      </div>
    </div>
  )
}

export default Specials