import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getObject } from "../../utils";
import { ICategory, IProduct } from "../../type";


export default function Catalogue() {

    const categoriesQuery = useQuery<ICategory[]>({
        queryKey: ['categories'],
        queryFn: async () => await getObject("categories")
    })
    const productsQuery = useQuery<IProduct[]>({
        queryKey: ['products'],
        queryFn: async () => await getObject("products")
    })

    const categories = categoriesQuery.data? categoriesQuery.data : [];
    const products = productsQuery.data ? productsQuery.data : [];

    const [currentSection, setCurrentSection]: any = useState(false)
    const changeSection = (selection: any) => {
        setCurrentSection(selection)
    };

    return (

        <div className="h-screen">
            {/*Just a pilot using local componentes, gonna use the api to render*/}
            <div className="bg-base-200 p-2 my-2 breadcrumbs">
                <ul>
                    <li><span onClick={() => changeSection(false)} className="hover:cursor-pointer hover:underline">/</span></li>
                    {currentSection && <li>{currentSection.category}</li>}
                </ul>
            </div>
            <div className="flex justify-between py-6">
                <div className="w-1/5">
                    <div className="grid my-4">
                        <h3 className="font-bold">Menu</h3>
                        <ul className="menu w-fit rounded-box">
                            {categories.length > 0 && categories.map((category) => (
                                <li key={category.id}>
                                    <span onClick={() => changeSection(category.name)} className={category.name == currentSection.name ? "bg-gray-200" : ""}>
                                        {category.name}
                                    </span>
                                </li>
                            )
                            )}
                            {!categoriesQuery.isError && !categoriesQuery.isLoading && categories.length === 0 && <strong className="mx-auto">Content not found</strong>}
                            {categoriesQuery.isLoading && <span className="loading loading-dots loading-xs"></span>}
                            {categoriesQuery.isError && <strong>An error has ocurred</strong>}
                        </ul>
                    </div>
                    <div className="grid">
                        <h3 className="font-bold">Others <span className="badge badge-neutral">próximamente</span></h3>
                    </div>
                </div>
                <div className="w-4/5 grid gap-4">
                {products.length > 0 && products.map((product) => (
                                <li key={product.id}>
                                    <span>
                                        {product.name}
                                    </span>
                                </li>
                            )
                            )}
                            {!productsQuery.isError && !productsQuery.isLoading && products.length === 0 && <strong className="mx-auto">Content not found</strong>}
                            {productsQuery.isLoading && <span className="loading loading-dots loading-lg mx-auto"></span>}
                            {productsQuery.isError && <strong>An error has ocurred</strong>}
                </div>
            </div>
        </div>
    )
}