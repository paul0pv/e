export default function Promotions() {
    return (
        <section className="grid pt-24">
            <h2 className="font-bold text-3xl pb-10">Promotions</h2>
        <div className="grid md:flex gap-4">
            <div className="card card-side">
                <figure className="w-3/5"><img src="" alt="pilot" /></figure>
                <div className="card-body w-3/5">
                    <h4 className="card-title flex">Promotion 1
                        <span className="badge badge-secondary">NEW</span>
                    </h4>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <div className="card-actions justify-end">
                            <span className="badge badge-outline">Fashion</span>
                            <span className="badge badge-outline">Products</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-side">
                <figure className="w-3/5"><img src="" alt="pilot" /></figure>
                <div className="card-body w-3/5">
                    <h4 className="card-title">Promotion 2
                    </h4>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <div className="card-actions justify-end">
                            <span className="badge badge-outline">Fashion</span>
                            <span className="badge badge-outline">Products</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-side">
                <figure className="w-3/5"><img src="" alt="pilot" /></figure>
                <div className="card-body w-3/5">
                    <h4 className="card-title">Promotion 3
                    </h4>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <div className="card-actions justify-end">
                            <span className="badge badge-outline">Fashion</span>
                            <span className="badge badge-outline">Products</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}