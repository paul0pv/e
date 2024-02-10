import { Link } from "react-router-dom";
import { BuildingOffice2Icon, UsersIcon } from "@heroicons/react/24/outline";

interface IRoute {
    authLevel: string;
    authRoute: string;
}

export default function LoginToogleButton({ authLevel, authRoute }:IRoute) {

    let icon:any = "logo"
    if (authRoute === "/admin-login") { icon = <UsersIcon className="h-6 w-6" /> }
    if (authRoute === "/login") { icon = <BuildingOffice2Icon className="h-6 w-6" /> }
    return (
        <Link to={authRoute} className="btn flex w-50 rounded-box mx-auto mb-2">
                {icon}
                <span>{authLevel}</span>
            </Link>
    )
}