import axios from "axios";
import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";



function Image(props) {
  const [imgsrc, setImgsrc] = useState("");

  const navigate = useNavigate();
  console.log("###", props);

  useEffect(() => {
    props.id &&
      axios
        .get(
          `https://api-nodejs-todolist.herokuapp.com/user/${props.id}/avatar`
        )
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          // const imageObjectURL = URL.createObjectURL(response.data);

          setImgsrc(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
  }, [props.id]);

  const handleDeleteImg = () => {
    const token = localStorage.getItem("token");
    var config = {
      method: "delete",
      url: "https://api-nodejs-todolist.herokuapp.com/user/me/avatar",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="my-10">

      <img className="object-none object-center my-3 rounded-xl bg-slate-500 mx-auto h-10 w-10 " src="" />
      <button
        onClick={() => navigate("/uploadImg")}
        className="flex-no-shrink p-2 ml-2 border-2 border-gray-500 rounded text-gray-500  hover:text-white hover:bg-gray-500"
      >
        Change Photo
      </button>
      <button
        onClick={handleDeleteImg}
        className="flex-no-shrink p-2 ml-2 border-2 border-gray-500 rounded text-gray-500  hover:text-white hover:bg-gray-500"
      >
        Delete Photo
      </button>
    </div>
  );
}

export default Image;
