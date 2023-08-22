import './Reservations.css'
import { useRef, useState } from 'react'

const Reservations = () => {

  return (
    <div className="reservations" id='myRes'>
        <div className="reservations-container">
            <form>
                <div className="row one">
                    <div className="input1">
                        <label htmlFor="date">Date*</label>
                        <input type='date' className="date input" required/>
                    </div>
                    {/* <div className="input2">
                        <label htmlFor="time">Time*</label>
                        <input type='text' className="time input"/>
                    </div> */}
                    <label htmlFor="time">Time</label>
                        <select name="time" id="time">
                            <option value="12pm">12pm</option>
                            <option value="2:30pm">2:30pm</option>
                            <option value="10am">10am</option>
                            <option value="4pm">4pm</option>
                            <option value="6pm">6pm</option>
                        </select>
                </div>
                <div className="row three">
                    <div className="input3">
                        <label htmlFor="fname">First Name*</label>
                        <input type='text' className="fname input" required/>
                    </div>
                    <div className="input4">
                        <label htmlFor="lname">Last Name*</label>
                        <input type='text' className="lname input" required/>
                    </div>
                </div>
                <label htmlFor="people">People*</label><br/>
                        <select name="seat" id="seat">
                            <option value="1">1 person</option>
                            <option value="2">2 people</option>
                            <option value="3">3 people</option>
                            <option value="4">4 people</option>
                            <option value="6">6 people</option>
                            <option value="8">8 people</option>
                        </select>
                <div className="row four">
                    <div className="input5">
                        <label htmlFor="email">Email*</label>
                        <input type='email' className="email input" placeholder="abcd123@gmail.com" required/>
                    </div>
                    <div className="input6">
                        <label htmlFor="phone">Phone*</label>
                        <input type='text' className="phone input" placeholder="123-7281-9191" required/>
                    </div>
                </div>
                <div>
                    <label htmlFor="comment" className='text-comment'>Comments(optional)</label>
                    <textarea name="comment" id="comment" cols="30" rows="7"></textarea>
                </div>
                <button type="submit" className='submit'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Reservations