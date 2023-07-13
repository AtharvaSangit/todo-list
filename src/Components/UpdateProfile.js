import React, { useState, useEffect } from "react";
import axios from "axios";
const initialUser = {
  name: "",
  age: "",
};
function UpdateProfile() {
  const [user, setUser] = useState({ ...initialUser });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    
    e.preventDefault();
  };
  console.log(user)
  const token = localStorage.getItem("token");

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api-nodejs-todolist.herokuapp.com/user/me",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log("ue",response.data);
        setUser({
            name: response.data.name,
            age: response.data.age
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [token]);

  const handleSubmit = (e) => {
    console.log(user);
    var config = {
      method: "put",
      url: "https://api-nodejs-todolist.herokuapp.com/user/me",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      data: user,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  };

  return (
    <div>
      
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Update Profile</h1>
        <form onSubmit={handleSubmit}>
          <input
            class="block border border-grey-light w-full p-3 rounded mb-4"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            placeholder="Username"
          />

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="age"
            value={user.age}
            onChange={handleChange}
            placeholder="Age"
          />

          <button
            type="submit"
            class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-800 focus:outline-none my-1"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
