import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialUser = {
  email: "",
  password: "",
};

function Login() {
  const [user, setUser] = useState({ ...initialUser });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    {
      console.log(user);
    }
    var config = {
      method: "post",
      url: "https://api-nodejs-todolist.herokuapp.com/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(user),
    };

    axios(config)
      .then(function (response) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/list", {replace:true});
        console.log(JSON.stringify(response.data));
        const token = response.data.token;
        localStorage.setItem("token", token);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                value={user.password}
                onChange={handleChange}
                placeholder="Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Login</button>
      </form> */}
    </div>
  );
}

export default Login;
