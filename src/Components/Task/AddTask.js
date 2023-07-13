import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddTask() {
  const [task, setTask] = useState({ description: "" });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setTask({ description: e.target.value });
    e.preventDefault()
  };

  const addTask = (e) => {
    console.log(JSON.stringify(task));
    const token = localStorage.getItem("token");
    var config = {
      method: "post",
      url: "https://api-nodejs-todolist.herokuapp.com/task",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(task),
    };
    
    axios(config)
      .then(function (response) {
        navigate("/list",{replace:true});
      })
      .catch(function (error) {
        alert("Description is required")
        console.log(error);
      });
      e.preventDefault()
  };

  return (
    <div >
      <form className="flex m-4" onSubmit={addTask}>
        <input
          className="shadow rounded w-full py-2 px-3 mx-4 text-grey-500"
          type="text"
          onChange={handleChange}
          placeholder="Add Todo"
        />

        <button className="bg-green-500 rounded px-2  hover:text-white hover:bg-green-900" type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;
