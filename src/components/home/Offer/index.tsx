import { TicketIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function Offer() {
    return (
        <section className="flex justify-between rounded-box mx-auto p-4">
            <div className="flex gap-2">
            <TicketIcon className="w-8 h-8 my-auto"/>
            <span className="my-auto">What are you waiting for? <strong>Join</strong></span>
            </div>
            <Link to="/login" className="btn btn-glass rounded-box w-40">
                Log in
            </Link>
        </section>
    )
}