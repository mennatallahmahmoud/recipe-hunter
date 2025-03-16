import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchCategories } from "../rtk/slices/Categories-Slice";
import { motion } from "framer-motion";
import { Link } from "react-router";
import "./Recipes.css";

export default function Categories() {

  const [searchInput, setSearchInput] = useState("");

  let state = useSelector((state) => state.cats);
  const dispatch = useDispatch();

  if(state) {
    state = state.filter((i) => {
      return i.strCategory.toLowerCase().startsWith(searchInput.toLowerCase())
    })
  }

  useEffect(() => {
    dispatch(fetchCategories());
  },[state])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="my-[170px] mx-[30px]">

      <header className="mb-10">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-gray-800">Explore Our Categories</h1>
        <p className="w-full md:w-1/2 text-gray-400 text-base leading-[20px]">
        Find everything you need in one place, sorted into easy-to-browse categories
        </p>
      </header>

      <form className="flex items-center max-w-sm ms-auto mb-16">   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className='w-[20px] fill-gray-700' height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M36,48H12c-0.522,0-0.957-0.402-0.997-0.923L9.07,21.946C5.095,21.484,2,18.097,2,14c0-4.419,3.678-8.151,8.032-8.151     c0.91,0,1.803,0.177,2.636,0.52C14.072,2.509,18.439,0,24,0c5.224,0,8.878,2.112,11.14,6.45c0.887-0.396,1.848-0.602,2.828-0.602     C42.322,5.849,46,9.581,46,14c0,4.097-3.095,7.484-7.07,7.946l-1.933,25.131C36.957,47.598,36.522,48,36,48z M12.926,46h22.147     l1.929-25.077C37.043,20.402,37.478,20,38,20c3.309,0,6-2.691,6-6c0-3.625-3.179-6.151-6.032-6.151     c-0.982,0-1.899,0.274-2.724,0.817c-0.245,0.161-0.551,0.207-0.832,0.123c-0.282-0.083-0.513-0.285-0.632-0.555     C31.898,3.981,28.791,2,24,2c-5.157,0-9.059,2.415-9.71,6.009c-0.06,0.33-0.281,0.608-0.59,0.74     c-0.308,0.134-0.663,0.102-0.943-0.083c-0.825-0.543-1.742-0.817-2.724-0.817C7.179,7.849,4,10.375,4,14c0,3.309,2.691,6,6,6     c0.522,0,0.957,0.402,0.997,0.923L12.926,46z"/></g><g><path d="M36.625,40h-25.25c-0.552,0-1-0.447-1-1s0.448-1,1-1h25.25c0.552,0,1,0.447,1,1S37.177,40,36.625,40z"/></g><g><path d="M19,40c-0.552,0-1-0.447-1-1v-8c0-0.553,0.448-1,1-1s1,0.447,1,1v8C20,39.553,19.552,40,19,40z"/></g><g><path d="M24,40c-0.552,0-1-0.447-1-1V29c0-0.553,0.448-1,1-1s1,0.447,1,1v10C25,39.553,24.552,40,24,40z"/></g><g><path d="M29,40c-0.552,0-1-0.447-1-1v-8c0-0.553,0.448-1,1-1s1,0.447,1,1v8C30,39.553,29.552,40,29,40z"/></g></g></g></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 focus-within:outline-none caret-red-700" placeholder="Search our categories..." 
                onChange={(e) => setSearchInput(e.target.value)} />
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium cursor-pointer text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
          </button>
      </form>

      {state ? (
      <div className="grid grid-cols-12 gap-6 overflow-hidden md:overflow-visible">
        {state?.length > 0 ? state.map((cat) => (
          <motion.div key={cat.idCategory} 
          className="recipe col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition duration-500"
          initial={{ x: 200, opacity: 0}}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once:true, amount: 0 }}>
            <Link to={`/categories/${cat.idCategory}`}>
                <img className="rounded-t-lg p-5" src={cat.strCategoryThumb} alt={cat.strCategory} />
            </Link>
            <div className="p-5">
                <Link to={`/categories/${cat.idCategory}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{cat.strCategory}</h5>
                </Link>
                <Link to={`/categories/${cat.idCategory}`} className="inline-flex items-center px-3 py-2 mt-5 text-sm text-center w-fit font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 uppercase transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                  Explore
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
            </div>
          </motion.div>
        )) : (
          <h1 className="col-span-12 text-3xl font-bold text-center text-gray-900">No Categories Available..</h1>
        )}

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
                    <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full max-w-[360px]"></div>
                </div>
                <span className="sr-only">Loading...</span>
          </div>
        ))}
      </div>
      )}
    </section>
  )
}
