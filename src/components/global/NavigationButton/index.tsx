import { Link } from "react-router-dom";
import { Bars3Icon, UserIcon, GlobeAltIcon } from "@heroicons/react/24/outline";

export default function NavigationButton({ route = "/" }) {

  const iconStyle =
    "justify-center content-center w-8 h-8 rounded-full cursor-pointer mx-auto my-2";

  return (
    <div className="dropdown dropdown-top z-50 fixed flex bottom-8 right-6 md:hidden">
      <div tabIndex={0} role="button" className="btn rounded-box">
        <Bars3Icon className="w-8 h-8" aria-hidden="true" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] shadow-lg rounded-box w-full"
      >
        <li>
          <Link to={route}>
            {route === "/" ? <GlobeAltIcon className={`${iconStyle}`} /> : <UserIcon className={`${iconStyle}`} />}
          </Link>
        </li>
      </ul>
    </div>
  );
}
