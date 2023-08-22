import SteakPlate from '../Assets/steakplate.png'
import Chef from '../Assets/chef.png'
import Steak from '../Assets/steak.png'
import Pepper from '../Assets/pepper-png.png'
import './About.css'

const About = () => {
  return (
    <div className="about" id='myAbout'>
        <div className="about-container">
            <h2>About <span><img src={Steak} alt='logo' className='steak-slice'/></span>SmokeTheme</h2>
            <div className="first-row">
                <img src={SteakPlate} alt="steakplate" className='steakplate'/>
                <p className='first-desc'>Looking for the best steak restaurant in Lagos? You have found it, and more, at SmokeTheme. Located on the popular Allen Avenue in Lagos, SmokeTheme mission is to serve it's guests an out of this world culinary experience when it comes to steak cuisine.Guests at SmokeTheme can enjoy not only one of the widest selections of different cuts, but also the most exclusive selection of the finest quality beef available. </p>
            </div>
            <div className="second-row">
                <img src={Pepper} alt="pepper" className='pepper'/>
                <p className='second-desc'>With over 30 years experience in the restaurant industry, the team at SmokeTheme lead by our lead chef, Chef Lawrence, is committed to quality, consistency, service and innovation in the kitchen. Have your chosen cut cooked to your liking using the exceptional high intensity, high-speed cooking method of the authentic Montague Broiler Grill in our open, purpose built kitchen. </p>
                <img src={Chef} alt="chef" className='chef'/>
            </div>
        </div>
    </div>
  )
}

export default About