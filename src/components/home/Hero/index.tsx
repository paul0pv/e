import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <>
            <div className="hero h-[70vh] rounded-lg shadow-lg" style={{ backgroundImage: 'url(https://github.com/paul0pv/e-imgRepo/blob/c5ad16923e2da58bfb296c0aae3d15bde74d7dcb/pacasmayo/balneario.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h2 className="text-3xl md:text-5xl font-bold">¿What's up? <br /> {`> Hello World <`} </h2>
                        <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa doloremque vero tenetur veniam officia suscipit iure quo eius quaerat doloribus asperiores, ea dicta cumque ut repellat praesentium saepe assumenda. Iusto.</p>
                        <Link to="/catalogue" className="btn glass">Button</Link>
                    </div>
                </div>
            </div>
        </>
    )
}