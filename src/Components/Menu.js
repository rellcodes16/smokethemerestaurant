import './Menu.css'
import Starters from './MenuList/StartersList'
import Soup from './MenuList/SoupList'
import Salad from './MenuList/SaladList'
import Burgers from './MenuList/BurgerList'
import Pastas from './MenuList/PastaList'
import Steaks from './MenuList/SteakList'
import GrillClassics from './MenuList/GrillList'
import Mains from './MenuList/MainsList'
import Dessert from './MenuList/DessertList'
import ExtraSides from './MenuList/ExtraSidesList'
import ExtraSauce from './MenuList/ExtraSauce'
import { useState } from 'react'
import BaconWrapper from '../Assets/baconwrapped-chicken.png'
import Guacamole from '../Assets/guacamole.png'
import Pasta from '../Assets/spaghetti.png'
import FilletMignon from '../Assets/steakplate.png'
import PorkChops from '../Assets/porkchops.png'
import Gravy from '../Assets/gravy.png'
import PotatoFries from '../Assets/potatofries.png'
import PlateSoup from '../Assets/platesoup.png'
import Brownies from '../Assets/brownies.png'
import CheeseBurger from '../Assets/cheeseburger.png'
import Chicken from '../Assets/chicken.png'
import Spoon from '../Assets/spoon.png'

const Menu = () => {
  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)
  const [modal7, setModal7] = useState(false)
  const [modal8, setModal8] = useState(false)
  const [modal9, setModal9] = useState(false)
  const [modal10, setModal10] = useState(false)
  const [modal11, setModal11] = useState(false)
  

  const toggleModal1 = () => {
    setModal1(!modal1)
    console.log('Toggled')
  }
  const toggleModal2 = () => {
    setModal2(!modal2)
    console.log('Toggled')
  }
  const toggleModal3 = () => {
    setModal3(!modal3)
    console.log('Toggled')
  }
  const toggleModal4 = () => {
    setModal4(!modal4)
    console.log('Toggled')
  }
  const toggleModal5 = () => {
    setModal5(!modal5)
    console.log('Toggled')
  }
  const toggleModal6 = () => {
    setModal6(!modal6)
  }
  const toggleModal7 = () => {
    setModal7(!modal7)
  }
  const toggleModal8 = () => {
    setModal8(!modal8)
  }
  const toggleModal9 = () => {
    setModal9(!modal9)
  }
  const toggleModal10 = () => {
    setModal10(!modal10)
  }
  const toggleModal11 = () => {
    setModal11(!modal11)
  }




  if (modal1) {
    document.body.classList.add('active-modal1')
    console.log('active')
  }
  else{
    document.body.classList.remove('active-modal1')
    console.log('unactive')
  }

  if (modal2) {
    document.body.classList.add('active-modal2')
    console.log('active')
  }
  else{
    document.body.classList.remove('active-modal2')
    console.log('unactive')
  }

  if (modal3) {
    document.body.classList.add('active-modal3')
    console.log('active')
  }
  else{
    document.body.classList.remove('active-modal3')
    console.log('unactive')
  }

  if (modal4) {
    document.body.classList.add('active-modal4')
    console.log('active')
  }
  else{
    document.body.classList.remove('active-modal4')
    console.log('unactive')
  }

  if (modal5) {
    document.body.classList.add('active-modal5')
    console.log('active')
  }
  else{
    document.body.classList.remove('active-modal5')
    console.log('unactive')
  }

  if (modal6) {
    document.body.classList.add('active-modal6')
  }
  else{
    document.body.classList.remove('active-modal6')
  }

  if (modal7) {
    document.body.classList.add('active-modal7')
  }
  else{
    document.body.classList.remove('active-modal7')
  }

  if (modal8) {
    document.body.classList.add('active-modal8')
  }
  else{
    document.body.classList.remove('active-modal8')
  }

  if (modal9) {
    document.body.classList.add('active-modal9')
  }
  else{
    document.body.classList.remove('active-modal9')
  }

  if (modal10) {
    document.body.classList.add('active-modal10')
  }
  else{
    document.body.classList.remove('active-modal10')
  }

  if (modal11) {
    document.body.classList.add('active-modal11')
  }
  else{
    document.body.classList.remove('active-modal11')
  }

 

  return (
    <div className="menu" id='myMenu'>
      <h3 className='heading'>Our Menu</h3>
      <div className="cards">
        <div className="card">
          <img src={BaconWrapper} alt="bacon-wrapped-chicken" className='menu-img'/>
          <div className='desc'>
            <h4>Starters</h4>
            <button onClick={toggleModal1} className='popup'>View</button>
          </div>

          {modal1 && (
            <div className='modal'>
            <div onClick={toggleModal1} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Starters</h2> <span><button className='close-modal' onClick={toggleModal1}>X</button></span>
              <Starters/>
            </div>
          </div>
          )}
        </div>
       <div className="card">
          <img src={PlateSoup} alt="" className='menu-img'/>
          <div className='desc'>
            <h4>Soup</h4>
            <button onClick={toggleModal2} className='popup'>View</button>
          </div>

          {modal2 && (
            <div className='modal'>
            <div onClick={toggleModal2} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Soup</h2> <span><button className='close-modal' onClick={toggleModal2}>X</button></span>
              <Soup/>
            </div>
          </div>
          )}
        </div>
         <div className="card">
          <img src={Guacamole} alt="guacamole" className='menu-img'/>
          <div className='desc'>
            <h4>Salad</h4>
            <button onClick={toggleModal3} className='popup'>View</button>
          </div>

          {modal3 && (
            <div className='modal'>
            <div onClick={toggleModal3} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Salad</h2> <span><button className='close-modal' onClick={toggleModal3}>X</button></span>
              <Salad/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={CheeseBurger} alt="cheese-burger" className='menu-img'/>
          <div className='desc'>
            <h4>Burgers</h4>
            <button onClick={toggleModal4} className='popup'>View</button>
          </div>

          {modal4 && (
            <div className='modal'>
            <div onClick={toggleModal4} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Burgers</h2> <span><button className='close-modal' onClick={toggleModal4}>X</button></span>
               <Burgers/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={Pasta} alt="pasta" className='menu-img'/>
          <div className='desc'>
            <h4>Pasta</h4>
            <button onClick={toggleModal5} className='popup'>View</button>
          </div>

          {modal5 && (
            <div className='modal'>
            <div onClick={toggleModal5} className='overlay'></div>
            <div className='modal-content'>
              <h2>Pasta</h2> <span><button className='close-modal' onClick={toggleModal5}>X</button></span>
              <Pastas/>
            </div>
          </div>
          )}
        </div>  
        <div className="card">
          <img src={FilletMignon} alt="fillet-mignon" className='menu-img'/>
          <div className='desc'>
            <h4>Steak</h4>
            <button onClick={toggleModal6} className='popup'>View</button>
          </div>

          {modal6 && (
            <div className='modal'>
            <div onClick={toggleModal6} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Steaks</h2> <span><button className='close-modal' onClick={toggleModal6}>X</button></span>
              <Steaks/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={PorkChops} alt="pork-chops" className='menu-img'/>
          <div className='desc'>
            <h4>Grill Classics</h4>
            <button onClick={toggleModal7} className='popup'>View</button>
          </div>

          {modal7 && (
            <div className='modal'>
            <div onClick={toggleModal7} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Grill Classics</h2> <span><button className='close-modal' onClick={toggleModal7}>X</button></span>
              <GrillClassics/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={Chicken} alt="chicken" className='menu-img'/>
          <div className='desc'>
            <h4>Mains</h4>
            <button onClick={toggleModal8} className='popup'>View</button>
          </div>

          {modal8 && (
            <div className='modal'>
            <div onClick={toggleModal8} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Mains</h2> <span><button className='close-modal' onClick={toggleModal8}>X</button></span>
              <Mains/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={Brownies} alt="brownies" className='menu-img'/>
          <div className='desc'>
            <h4>Dessert</h4>
            <button onClick={toggleModal9} className='popup'>View</button>
          </div>

          {modal9 && (
            <div className='modal'>
            <div onClick={toggleModal9} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Dessert</h2> <span><button className='close-modal' onClick={toggleModal9}>X</button></span>
              <Dessert/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={PotatoFries} alt="potato-fries" className='menu-img'/>
          <div className='desc'>
            <h4>Extra Sides</h4>
            <button onClick={toggleModal10} className='popup'>View</button>
          </div>

          {modal10 && (
            <div className='modal'>
            <div onClick={toggleModal10} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Extra Sides</h2> <span><button className='close-modal' onClick={toggleModal10}>X</button></span>
              <ExtraSides/>
            </div>
          </div>
          )}
        </div>
        <div className="card">
          <img src={Gravy} alt="gravy" className='menu-img'/>
          <div className='desc'>
            <h4>Extra Sauce</h4>
            <button onClick={toggleModal11} className='popup'>View</button>
          </div>

          {modal11 && (
            <div className='modal'>
            <div onClick={toggleModal11} className='overlay'></div>
            <div className='modal-content'>
              <h2 className='desc-heading'>Extra Sauce</h2> <span><button className='close-modal' onClick={toggleModal11}>X</button></span>
              <ExtraSauce/>
            </div>
          </div>
          )}
        </div>  
      </div>
    </div>
  )
}

export default Menu