import React from 'react'
import './Landing.css'
import landingPage from '../Assets/landing.jpg'
import {link} from 'react-router-dom'

function Landing() {
    return (
        <div>
            <div className='container'>

                <div className='landing-section'>
                    <div className='content-section'>

                        <h2>BLOOD DONATION IS THE
                            <br></br><span> LIFE DONATION</span></h2>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, assumenda consectetur?
                            Nihil esse voluptas odit vitae rerum aliquam? Ab earum sequi laborum dolore sit? Aut repellat blanditiis dolorum illum corrupti?</p>
                        <button>Learn more</button>
                    </div>
                    <div className='image-section' >
                        <div >
                            <img src={landingPage} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Landing
