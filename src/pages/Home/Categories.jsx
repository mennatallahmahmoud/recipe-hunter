import { motion } from "framer-motion";
import "./Categories.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories } from "../../rtk/slices/Categories-Slice";
import { Link } from "react-router";


export default function Categories() {

  const allState = useSelector((state) => state.cats);
  const state = allState && allState.slice(0, 4);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories())
  }, [state])


  return (
    <section className='cats-container bg-[#e4e4e480] relative overflow-hidden'>
      <div className="background w-full h-full absolute top-0 left-0"></div>
        <motion.div className="container mx-auto py-20 relative z-10"
            initial={{ y: 100, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once:true, amount: 0 }}
        >
            <div className='header text-center mb-20 mx-4'>
                <h2 className='text-3xl md:text-5xl font-bold mb-5'>Explore, Select, Enjoy</h2>
                <p className='text-base md:text-lg md:w-[60%] lg:w-[50%] mx-4 md:mx-auto text-zinc-400 leading-[22px]'>Browse through our categories and discover exactly what you need with ease and style</p>
            </div>
            {state ? (
            <div className="categories-container grid grid-cols-12 gap-3 text-center">
              {state?.length > 0 && state.map((cat) => (
              <div key={cat.idCategory} className="category col-span-12 md:col-span-6 lg:col-span-3 m-5 lg:m-2  bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl">
                  <Link to={`/categories/${cat.idCategory}`} className="block m-5">
                      <img className="rounded-t-lg max-w-full" src={cat.strCategoryThumb} alt={cat.strCategory} />
                  </Link>
                  <div className="px-5 pb-5">
                      <Link to={`/categories/${cat.idCategory}`} className="block pt-4 border-t-2 border-[#e0e0e0]">
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{cat.strCategory}</h5>
                      </Link>
                      <p className="mb-3 font-normal text-gray-500">{cat.strCategoryDescription.slice(0, 50)}...</p>
                      <Link to={`/categories/${cat.idCategory}`} className="read-btn inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-600 ">
                          Explore
                          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                          </svg>
                      </Link>
                  </div>
              </div>
              ))}
            </div>
            ) : (
            <div className="flex gap-3">
              {Array.from({length: 4}).map((d, i) => (
                <div key={i} role="status" className="flex flex-col basis-[25%] space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
                      <div className="flex items-center justify-center w-full mb-3 h-48 bg-gray-300 rounded-sm">
                          <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                          </svg>
                      </div>
                      <div className="w-full">
                          <div className="h-2.5 bg-gray-200 rounded-full w-48 mb-4"></div>
                          <div className="h-2 bg-gray-200 rounded-full max-w-[480px] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
                          <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                      </div>
                      <span className="sr-only">Loading...</span>
                </div>
              ))}
            </div>
            )}
            <Link to="/categories" className="block w-fit mx-auto mt-20 text-xl md:text-2xl font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-10 md:px-14 py-2.5 uppercase">Find more</Link>
        </motion.div>
    </section>
  )
}
