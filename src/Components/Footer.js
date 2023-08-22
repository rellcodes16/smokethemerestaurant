import './Footer.css'
import RedPin from '../Assets/redpin.png'


const Footer = () => {
  return (
    <div className='footer' id='myFooter'>
        <div className='footer-container'>
            <div className='contact-address'>
                <h4>Address</h4>
                <p>No 89, Allen Avenue, 2nd Floor, Ikeja, Lagos.</p>
                <h4>Call Us</h4>
                <p>(+234)81-2152-8112</p>
            </div>
            <div className='time-card'>
                <span><img src={RedPin} className='red-pin'/></span>
                <h4 style={{textAlign: 'center', fontSize: '1.5rem'}}>Open Hours</h4>
                <p>Sunday 12pm-6pm</p>
                <p>Monday 9pm-12am</p>
                <p>Tuesday 9pm-12am</p>
                <p>Wednesday 9pm-12am</p>
                <p>Thursday 9pm-12am</p>
                <p>Friday 9pm-12am</p>
                <p>Saturday 9pm-12am</p>
            </div>
        </div>
        <h4 className='rights-text'>All Rights Reserved by &copy; <span className='logo'>SmokeTheme</span></h4>
    </div>
  )
}

export default Footer