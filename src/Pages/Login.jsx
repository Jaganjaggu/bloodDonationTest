import React, { useState } from 'react'
import './Login.css'
import loginimage from '../Assets/login.jpg'
import { Link, useNavigate, } from 'react-router-dom'
import { loginAPI } from '../Services/allAPI'


export default function Login() {
   const navigate = useNavigate()


   const [userData, setUserData] = useState({
      email: "", password: ""
   })
   const handleLogin = async (e) => {
      e.preventDefault()
      const { email, password } = userData
      if (!email || !password) {
         alert("please fill the form completely!!!!")
      } else {
         const result = await loginAPI(userData)
         console.log(result);

         if (result.status === 200) {
            sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
            sessionStorage.setItem("token",result.data.token)
            setUserData({
               email: "", password: ""
            })
            if (result.data.existingUser.usertype === 'person') {
               navigate("/Person-Landing")
            }else if(result.data.existingUser.usertype === 'Hospital'){
               navigate('/Hospital')
            }

              
         } else {
            alert(result.response.data)
         }

      }
   }


   return (
      <div>
         <div className="login">
            <img src={loginimage} alt="login image" className="login__img" />

            <form onSubmit={handleLogin} action="" className="login__form">
               <h1 className="login__title">Login</h1>

               <div className="login__content">
                  <div className="login__box">
                     <i class="ri-mail-line"></i>
                     <div className="login__box-input">
                        <input onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} type="email" required className="login__input" id="login-email" placeholder=" " value={userData.email} />
                        <label for="login-email" className="login__label">Email</label>
                     </div>
                  </div>

                  <div className="login__box">
                     <i className="ri-lock-2-line login__icon"></i>

                     <div className="login__box-input">
                        <input onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }} type="password" required className="login__input" id="login-pass" placeholder=" " value={userData.password} />
                        <label for="login-pass" className="login__label">Password</label>
                        <i className="ri-eye-off-line login__eye" id="login-eye"></i>
                     </div>
                  </div>
               </div>

               <div className="login__check">
                  <div className="login__check-group">
                     <input type="checkbox" className="login__check-input" id="login-check" />
                     <label for="login-check" className="login__check-label">Remember me</label>
                  </div>

                  <a href="#" className="login__forgot">Forgot Password?</a>
               </div>

               <button type="submit" className="login__button">Login</button>

               <p className="login__register">
                  Don't have an account? <Link to={'/Register'}>Register</Link>
               </p>
            </form>
         </div>

         <script src="assets/js/main.js"></script>
      </div>
   )
}
