import React, { useContext } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import './Personlanding.css'
import { personViewContext } from '../Contexts/ContextShare'
import { useNavigate } from 'react-router-dom'

function Personlanding() {

  const { personviewresponse, setPersonviewresponse } = useContext(personViewContext)
  const navigate = useNavigate()
  const handlepersonview = (val) => {
    setPersonviewresponse(val)
    navigate('/donate')
  }
  return (
    <>
      <div className='person-main-container'>
        <div className='person-header'><Header /></div>
        <div className='person-container'>
          <div className='background-new'></div>
          <div className='person-content-section'>

            <h1>BLOOD DONATION</h1><span>Is The Life Donation</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum omnis necessitatibus placeat eius, accusantium quae debitis ducimus cum officiis maxime eos quasi aliquid! Optio recusandae similique, repudiandae eius at voluptate.</p>

            <button onClick={() => handlepersonview("donate")} className='b1'>DONATE</button>
            <button onClick={() => handlepersonview("receive")} className='b2'>RECEIVE</button>
            <button onClick={() => handlepersonview("action")} className='b2'>ACTIONS</button>

          </div>

          <div className='graph-section'>
            <div className='bars'>
              <div className='bars-section'>
                <div className='bars-count'>20+</div>
                <div className='bars-value'>Hospital</div>
              </div>
              <div className='bars-section'>
                <div className='bars-count'>30+</div>
                <div className='bars-value'>Request</div>

              </div>
            </div>
          </div>

        </div>
        <Footer />

      </div>    </>
  )
}

export default Personlanding
