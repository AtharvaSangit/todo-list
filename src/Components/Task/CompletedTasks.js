import React, { useState, useEffect } from "react";
import axios from "axios";

function CompletedTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    var config = {
      method: "get",
      url: "https://api-nodejs-todolist.herokuapp.com/task?completed=true",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        setTasks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div>
    <h1 class="mb-8 text-xl  text-center">Completed Tasks</h1>
      <ul className="m-5">
        {tasks?.map((task) => (
          <li key={task._id} className="flex mb-4 items-center">
            <h3 className="w-full text-grey-900">{task.description}</h3>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompletedTasks;
