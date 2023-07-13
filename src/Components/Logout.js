import { useNavigate } from "react-router-dom";
import axios from "axios";

function Logout() {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem("token");
    var config = {
      method: "post",
      url: "https://api-nodejs-todolist.herokuapp.com/user/logout",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        navigate('/login', {replace:true});
        console.log(response.data);
        localStorage.setItem("isLoggedIn", false);
        console.log(token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleClick} >Log Out</button>
    </div>
  );
}

export default Logout;
