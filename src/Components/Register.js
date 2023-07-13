import React, { useState } from "react";
import {NavLink, useNavigate } from "react-router-dom";
import axios from "axios";



const initialUser = {
  name: "",
  email: "",
  password: "",
  age: "",
};

function Register() {
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
    console.log(user);
    var config = {
      method: "post",
      url: "https://api-nodejs-todolist.herokuapp.com/user/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(user),
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/login");
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
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                className="block border border-grey-light w-full p-3 rounded mb-4"
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Username"
              />

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
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="age"
                value={user.age}
                onChange={handleChange}
                placeholder="Age"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
          </div>

          <div className="text-slate-500 mt-6">
            Already have an account?
            <NavLink
              className="no-underline text-blue-600"
              to="login"
            >
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
