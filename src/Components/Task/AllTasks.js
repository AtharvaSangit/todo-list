import React, { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AllTasks() {
  const [tasks, setTasks] = useState([]);
 
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://api-nodejs-todolist.herokuapp.com/task",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        setTasks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [token]);
  
  const handleComplete = (e) => {
    console.log(e.target.value);
  

 

    var config = {
      method: "put",
      url: `https://api-nodejs-todolist.herokuapp.com/task/${e.target.value}`,
      data: { completed: true },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        navigate("/list", {replace:true});
      })
      .catch(function (error) {
        console.log(error);
      });
     
    console.log(tasks);
  };

  const handleDelete = (e) => {
    console.log(e.target.value);
    

    var config = {
      method: "delete",
      url: `https://api-nodejs-todolist.herokuapp.com/task/${e.target.value}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
        navigate("/list", {replace:true});
      })
      .catch(function (error) {
        console.log(error);
      });

    console.log(tasks);
  };
  
  return (
    <div>
      {console.log(tasks)}
      <h1 class="mb-8 text-xl mr-52 ml-10 text-center">All Tasks</h1>
      <ul className="mx-8">
        {tasks?.map((task) => (
          <li key={task._id} className="flex mb-4 items-center">
          
            <h3  className={(task.completed)?"w-full text-red-700":"w-full text-grey-900"}>
              {task.description}
            </h3>
              <button  className="flex-no-shrink p-2 ml-4 mr-2 border-2 border-green-500 rounded hover:text-white text-green-500  hover:bg-green-500" value={task._id} onClick={handleComplete}>
                Done
              </button>
            
              <button className="flex-no-shrink p-2 ml-2 border-2 border-red-500 rounded text-red-500  hover:text-white hover:bg-red-500" value={task._id} onClick={handleDelete}>
                Remove
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllTasks;
