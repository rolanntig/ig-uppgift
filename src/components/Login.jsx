import React, { useState , useEffect} from "react";
import "../index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [usr, setUsr] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setUsr((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

    const navigate = useNavigate();
    
    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get('/login').then((resp) => {
            const isLoggedin = resp.data.isLoggedin;
            if (isLoggedin) {
                navigate('/');
            }else{
                return;
            }
        });
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/login", usr);

        console.log(resp)
        const isLoggedin = resp.data.isLoggedin;
        
      if (isLoggedin) {
        navigate("/");
      } else {
        alert("Wrong username or password");
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full max-w-xs justify-center">
      <form
        action=""
        method="post"
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            placeholder="Username"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="username"
            id="username"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Password"
            name="password"
            id="password"
          />
        </div>
        <p>
          Don't have a account? <Link to="/signup">Sign Up</Link>
        </p>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
