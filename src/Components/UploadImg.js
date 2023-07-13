import React, { useState } from "react";

import axios from "axios";

function UploadImg() {
  const [file, setFile] = useState({});
  const handleSubmit = (e) => {
    const token = localStorage.getItem("token");
    const url = "https://api-nodejs-todolist.herokuapp.com/user/me/avatar";
    const formData = new FormData();
    formData.append("avatar", file);
    //formData.append("fileName", file.name);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response.data);
    });
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  return (
    <div>
      UploadImg
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadImg;
