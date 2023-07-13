import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import AddTask from "./Task/AddTask";

function List() {
  return (
    <div>
      <NavBar />
      <h1 className="text-5xl mt-3 font-bold">Todo List</h1>
      <AddTask />

      <nav className="flex flex-wrap text-sm font-medium text-center mx-10 text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <NavLink
          to="completedTasks"
          className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          Completed
        </NavLink>
        <NavLink
          to="allTasks"
          className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  "
        >
          All
        </NavLink>
        <NavLink
          to="paginationList"
          className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300  "
        >
          Pagination
        </NavLink>
      </nav>
      <Outlet className="w-full " />
    </div>
  );
}

export default List;
