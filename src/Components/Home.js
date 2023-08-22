import SteakPlatter from '../Assets/steak-platter.png'
import './Home.css'
import Reservations from './Reservations'
import { useState } from 'react'

const Home = () => {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
    console.log('Toggled')
  }

  if (modal) {
    document.body.classList.add('active-modal')
    console.log('active')
  }
  else{
    document.body.classList.remove('active-modal')
    console.log('unactive')
  }


  return (
    <div className="home" id='myHome'>
      <div className="home-container">
        <div class="left">
          <h1 className="home-heading">A Premium And Authentic <br/> Steakhouse</h1>
          <p className='sub-heading'>A progression of rare and beautiful ingredients where texture, flavor and harmony is paramount.</p>
          <button onClick={toggleModal} id="reserveBtn">Book Reservations</button>

          {modal && (
            <div className='modal'>
              <div onClick={toggleModal} className='overlay'></div>
              <div className='modal-content'>
                <h2 className='desc-heading'>Bookings</h2> <span><button className='close-modal' onClick={toggleModal}>X</button></span>
                <Reservations/>
              </div>
            </div>
          )}
            </div>
            <div class="right">
                <img src={SteakPlatter} alt="steakplatter" className='steak-platter'/>
            </div>
        </div>
    </div>
  )
}

export default Home