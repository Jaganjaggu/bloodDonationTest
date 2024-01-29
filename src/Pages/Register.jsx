import React, { useState } from 'react'
import './Register.css'
import loginimage from '../Assets/login.jpg'
import { Link,  useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/allAPI'


export default function Register() {
  const [hover, setHover] = useState(false)
  const [usertype, setUserType] = useState("User")
  const [userdata, setUserData] = useState({
    username: "", email: "", password: "", bloodgroup: "", usertype: "", location: ""

  })
  // console.log(userdata);
  const navigate = useNavigate()
  const handleChangeUser = (res) => {

    setUserData({ ...userdata, usertype: res })
    setUserType(res)
    setHover(false)

  }
  const handleRegister = async (e) => {

    e.preventDefault()
    const { username, email, password, location, bloodgroup, usertype } = userdata
    if(usertype==="person"){
  
    if (!username || !email || !password || !location || !bloodgroup || !usertype) {
      alert("please fill the form completely!!!!")

    } else {

      const result = await registerAPI(userdata)
      // console.log(result.status);
      if (result.status === 200) {
        alert(`${result.data.username} registered successfully!!!`)
        setUserData({
          username: "", email: "", password: "", bloodgroup: "", usertype: "", location: ""
        })
        navigate("/")
      } else {
        alert(result.response.data)
      }

    }
  }
  
    else{
      if (!username || !email || !password || !location || !usertype) {
        alert("please fill the form completely!!!!")
  
      } else {
  
        const result = await registerAPI(userdata)
        // console.log(result.status);
        if (result.status === 200) {
          alert(`${result.data.username} registered successfully!!!`)
          setUserData({
            username: "", email: "", password: "", bloodgroup: "", usertype: "", location: ""
          })
          navigate("/Login")
        } else {
          alert(result.response.data)
        }
  
      }
  

    }
  }


  return (
    <div>
      <div className="login">
        <img src={loginimage} alt="login image" className="login__img" />

        <form onSubmit={handleRegister} action="" className="login__form">
          <div onMouseLeave={() => setHover(false)} className='Change-User'>
            <i onMouseEnter={() => setHover(true)} className="ri-settings-5-fill settings-icon" ></i>


            {!hover &&
              <p>
                {usertype}
              </p>
            }
            {hover &&


              <div className='drop-down-user'>
                <ul>
                  <li onClick={() => handleChangeUser("Hospital")}>Hospital</li>
                  <li onClick={() => handleChangeUser("Person")}>Person</li>
                </ul>
              </div>
            }
          </div>
          <h1 className="login__title">Register</h1>

          <div className="login__content">

            <div className="login__box">
              <i className="ri-user-3-line login__icon"></i>

              <div className="login__box-input">
                <input onChange={(e) => { setUserData({ ...userdata, username: e.target.value }) }} type="Full Name" required className="login__input" id="login-email" placeholder=" " value={userdata.username} />
                <label for="login-email" className="login__label">{usertype === "Person" ? "Full Name" : "Hospital Name"}</label>
              </div>
            </div>
            <div className="login__box">
              <i class="ri-mail-fill"></i>
              <div className="login__box-input">
                <input onChange={(e) => { setUserData({ ...userdata, email: e.target.value }) }} type="email" required className="login__input" id="login-email" placeholder=" " value={userdata.email} />
                <label for="login-email" className="login__label">Email</label>
              </div>
            </div>
            <div className="login__box">
              <i class="ri-lock-line"></i>

              <div className="login__box-input">
                <input onChange={(e) => { setUserData({ ...userdata, password: e.target.value }) }} type="password" required className="login__input" id="login-email" placeholder=" " value={userdata.password} />
                <label for="login-email" className="login__label">Password</label>
              </div>
            </div>
            {usertype === "Person" &&
              <div className="login__box">
                <i class="ri-heart-pulse-fill"></i>
                <div className="login__box-input">
                  <input onChange={(e) => { setUserData({ ...userdata, bloodgroup: e.target.value }) }} type="Blood Group" required className="login__input" id="login-email" placeholder=" " value={userdata.bloodgroup} />
                  <label for="login-email" className="login__label">Blood Group</label>
                </div>
              </div>
            }

            <div className="login__box">
              <i class="ri-map-pin-fill"></i>
              <div className="login__box-input">
                <input onChange={(e) => { setUserData({ ...userdata, location: e.target.value }) }} type="Location" required className="login__input" id="login-email" placeholder=" " value={userdata.location} />
                <label for="login-email" className="login__label">Location</label>
              </div>
            </div>



          </div>


          <button type="submit" className="login__button">Register</button>

          <p className="login__register">
            Already have an account? <Link to={'/Login'}>Login</Link>
          </p>
        </form>
      </div>

      <script src="assets/js/main.js"></script>
    </div>
  )
}
