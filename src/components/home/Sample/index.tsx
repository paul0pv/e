import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getObject } from "../../../utils";
import { ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { ICategory, IProduct } from "../../../type";


export default function Sample() {

  const categoriesQuery = useQuery<ICategory[]>({
    queryKey: ['categories'],
    queryFn: async () => await getObject("categories")
  })
  const productsQuery = useQuery<IProduct[]>({
    queryKey: ['products'],
    queryFn: async () => await getObject("products")
})

  const categories = categoriesQuery.data ? categoriesQuery.data : [];
  const products = productsQuery.data ? productsQuery.data : [];

  const [currentSection, setCurrentSection] = useState("")
  {/**const changeSection = (selection: any) => {
    setCurrentSection(selection)
  }; */}

  return (
    <div className="border-y-0 border-y-transparent">

      <h2 className="text-3xl font-bold py-10">Our services</h2>

      {/*Mobile view*/}
      <div className="static grid justify-items-center mx-auto my-2 md:hidden">
        <button
          className="btn p-6 rounded-box content-center"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          {currentSection}
          <ChevronUpDownIcon
            className="w-5 text-black-500"
            aria-hidden="true"
          />
        </button>
        <dialog id="my_modal_2" className="modal rounded-box ">
          <form method="dialog" className="modal-box menu content-center w-fit gap-6">
            {categories.length > 0 && categories.map((category) => (
              <button key={category.id}>
                <span
                 /** onClick={() => changeSection(category.name)} */
                  className="join-item py-2 px-6 text-lg font-semibold"
                >
                  {category.name}
                </span>
              </button>
            )
            )}
            {!categoriesQuery.isError && categories.length === 0 && <strong className="mx-auto">No se han encontrado categorias</strong>}
            {categoriesQuery.isLoading && <span className="loading loading-dots loading-xs"></span>}
            {categoriesQuery.isError && <strong>Sorry, an error has ocurred</strong>}
          </form>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>
      </div>
      {/*Desktop view*/}
      <div className="hidden justify-center w-full py-2 gap-4 mt-6 mb-10 md:flex">
        {categories.length > 0 && categories.map((category) => (
          <span
            /**onClick={() => changeSection(category.name)} */
            key={category.id}
            className={`btn btn-md rounded-box ${currentSection === category.name ? 'font-black text-md border-1 border-white' : 'font-bold text-sm'}`}
          >
            {category.name}
          </span>
        ))}
        {!categoriesQuery.isLoading && !productsQuery.isError && categories.length === 0 && <strong className="mx-auto">No se han encontrado categorias</strong>}
        {categoriesQuery.isLoading && <span className="loading loading-dots loading-xs"></span>}
        {categoriesQuery.isError && <strong>Sorry, an error has ocurred</strong>}
      </div>

      <div className="mt-8 lg:mt-4">
      {products.length > 0 && products.map((product) => (
                                <div
                                id={product.id}
                                key={product.id}
                              >
                                {product.name}
                              </div>
                            )
                            )}
                            {!productsQuery.isLoading && !productsQuery.isError && products.length === 0 && <strong className="mx-auto">No se han encontrado productos</strong>}
                            {productsQuery.isLoading && <span className="loading loading-dots loading-lg mx-auto"></span>}
                            {productsQuery.isError && <strong>Sorry, an error has ocurred</strong>}
      </div>

    </div>
  );
}
