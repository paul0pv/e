import { ExclamationCircleIcon } from "@heroicons/react/24/outline"

export default function HoverAdvice ({advice=""}) {
    return (
        <div className="hidden dropdown dropdown-hover md:flex">
                            <div tabIndex={0} role="button"> <ExclamationCircleIcon className="w-5 h-5 mx-auto md:mx-0" /></div>
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li>{advice}</li>
                            </ul>
                        </div>
    )
}