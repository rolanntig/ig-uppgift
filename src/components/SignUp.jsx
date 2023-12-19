import axios from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [usr, setUsr] = useState({
        email: '',
        username: '',
        password: '',
        vpassword: ''
})

    const handleChange = (e) => {
        setUsr((prev) =>({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (usr.password !== usr.vpassword) {
            alert("Passwords don't match")
            return
        } else {
            try {
                axios.post("/signup", usr)
                navigate('/');
            } catch (err) {
                console.log(err)
            }
        }

        
    }

  return (
    <div>
          <form action="" method='post' onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={handleChange} required/>
              <label htmlFor="username">Username</label>
              <input type="text" name="username" id="username" onChange={handleChange} required/>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" onChange={handleChange} required/>
              <label htmlFor="vpassword">Verify Password</label>
                <input type="password" name="vpassword" id="vpassword" onChange={handleChange} required/>
              <p>Already have a account? <Link to="/login">Login</Link></p>
              <input type="submit" value="SignUp" />

      </form>
    </div>
  )
}

export default SignUp
