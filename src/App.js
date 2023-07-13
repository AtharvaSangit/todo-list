import "./App.css";
import { Routes, Route, Navigate} from "react-router-dom";
import Register from "./Components/Register";
import List from "./Components/List";
import Login from "./Components/Login";
import AddTask from "./Components/Task/AddTask";
import CompletedTasks from "./Components/Task/CompletedTasks";
import AllTasks from "./Components/Task/AllTasks";

import Profile from "./Components/Profile";
import UpdateProfile from "./Components/UpdateProfile";
import UploadImg from "./Components/UploadImg";
import PaginationList from "./Components/Task/PaginationList";
import PrivateRoute from "./Components/PrivateRoute";




function App() {
  
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Register />} />
       
        <Route path="list" element={<PrivateRoute Component={List}/>}>
          <Route index element={<Navigate to="allTasks" />}/>
          <Route path="addtask" element={<AddTask />} />
          <Route path="completedTasks" element={<CompletedTasks />} />
          <Route path="allTasks" element={<AllTasks />} />
          <Route path="paginationList" element={<PaginationList />} />
        </Route>
        <Route path="uploadImg" element={<UploadImg />} />
        <Route path="profile" element={<PrivateRoute Component={Profile}/>} />
    
     
        <Route path="updateProfile" element={<UpdateProfile />} />

        <Route path="login" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
