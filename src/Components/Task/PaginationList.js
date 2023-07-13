import React, { useState, useEffect } from "react";
import axios from "axios";

function PaginationList() {
  const [tasks, setTasks] = useState([]);
  const pages = useState(Math.round(tasks.length / 2));
  const [currentPage, setCurrentPage] = useState(1);

  //   const indexOfFirstRecord = indexOfLastRecord  + 2;
  //   const indexOfLastRecord = currentPage * 2;

  const handleNext = () => {
 
    setCurrentPage((page) => page + 1);
    
  };
  const handlePrevious = () => {
    setCurrentPage((page) => page - 1);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    var config = {
      method: "get",
      url: `https://api-nodejs-todolist.herokuapp.com/task?limit=2&skip=${
        currentPage * 2 - 2
      }`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response) {
        console.log(response.data.data);
        setTasks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentPage]);

  return (
    <div>
      <div>
        <ul className="m-5">
          {tasks?.map((task) => (
            <li key={task._id} className="flex mb-4 items-center">
              <h3 className="w-full text-grey-900">{task.description}</h3>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handlePrevious}
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 border-green-500 rounded hover:text-white text-green-500  hover:bg-green-500"
      >
        Previous
      </button>
      {currentPage}
      <button
        onClick={handleNext}
        className="flex-no-shrink p-2 ml-4 mr-2 border-2 border-green-500 rounded hover:text-white text-green-500  hover:bg-green-500"
      >
        Next
      </button>
    </div>
  );
}

export default PaginationList;
