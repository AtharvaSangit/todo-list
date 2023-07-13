import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Logout from "./Logout";
import Image from "./Image";
import NavBar from "./NavBar";

function Profile() {
    const [info, setInfo] = useState({})
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api-nodejs-todolist.herokuapp.com/user/me",
      headers: {
        Authorization:
        `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setInfo(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [token]);

  const handleUpdate = () => {
    navigate("/updateProfile");
  }

  const handleDelete = () => {
    var config = {
      method: 'delete',
      url: 'https://api-nodejs-todolist.herokuapp.com/user/me',
      headers: { 
        'Authorization': `Bearer ${token}`
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (<div><NavBar/>
<h1 class="mb-8 text-3xl text-center">My Profile</h1>
    <div>
    {console.log(info._id)}
    <Image id={info._id}/>
    </div>
    <h1>Username: {info.name}</h1>
    <h1>Email: {info.email}</h1>
    <h1>Age: {info.age}</h1>
    <button className="flex-no-shrink p-2 my-3 ml-2 border-2 border-gray-500 rounded text-gray-500  hover:text-white hover:bg-gray-500" onClick={handleUpdate}>Update Profile</button>
    <button className="flex-no-shrink p-2 my-3 ml-2 border-2 border-gray-500 rounded text-gray-500  hover:text-white hover:bg-gray-500" onClick={handleDelete}>Delete User</button>
    <Logout />
  </div>);
}

export default Profile;
