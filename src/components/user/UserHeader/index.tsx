import { UserCircleIcon } from "@heroicons/react/24/outline";
import DarkLightMode from "../../global/DarkLightMode";
import { userStore } from "../../../store";
import { useNavigate } from "react-router-dom";
/**
 * import { useParams } from "react-router-dom";
 * import { useState, useEffect } from "react";
 * */

export default function UserNav() {

  const navigate = useNavigate()

{/**
  const currentUser = userStore(state => state.user)
  const userName = useParams();

  const [user, setUser] = useState(null);
useEffect(() => if (currentUser) {setUser(currentUser)}, [userName]);
*/}


  const exit = userStore(state => state.logOut)

  function logOut() {
    exit()
    navigate("/")
  }

  return (
    <div className="navbar bg-base-100 my-4 px-8">
      <div className="flex-1 mx-auto md:mx-0">
        <a className="btn btn-ghost text-xl">DON BIGOTES</a>
      </div>
      <div className="flex-none gap-4 my-auto mr-4 md:mx-0">
        <DarkLightMode className="h-8 w-8" />
        <div className="hidden md:flex">
          <div className="my-auto mx-2">user</div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <UserCircleIcon className="h-8 w-8" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box">
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><button onClick={logOut}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
