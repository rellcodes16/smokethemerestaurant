import { Facebook } from "@mui/icons-material"
import { Instagram } from "@mui/icons-material"
import { Twitter } from "@mui/icons-material"
import ThumbsUp from '../Assets/thumbup.png'

import './Review.css'

const Review = () => {
  return (
    <div className='review' id="myReview">
        <div className='review-container'>
            <div className='text'>
                <img src={ThumbsUp} alt='thumbup' className="thumbsup"/>
                <h4>Enjoyed your meal?Leave us a review!</h4>
            </div>
            <div className='icons'>
                <a href="#" className="ficon"><Facebook/></a>
                <a href="#" className="inicon"><Instagram/></a>
                <a href="#" className="ticon"><Twitter/></a>
            </div>
        </div>
    </div>
  )
}

export default Review