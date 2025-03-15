import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchAllMeals } from "../rtk/slices/Meals-Slice";
import { fetchCategories } from "../rtk/slices/Categories-Slice"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "flowbite";
import "./Recipes.css";

export default function Recipes() {

  let filteredState;

  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");

  let state = useSelector((state) => state.meals.meals);
  const categoriesState = useSelector((state) => state.cats.categories);
  const dispatch = useDispatch();

  if(state) {
    filteredState = state.filter((i) => {
      return searchInput ? i.strMeal.toLowerCase().startsWith(searchInput.toLowerCase()) 
      : category ? i.strCategory.toLowerCase() === category.toLowerCase() : state
    })
  }
  
  useEffect(() => {
    import("flowbite").then(({ initDropdowns }) => {
        initDropdowns();
    });
}, []);

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  useEffect(() => {
    dispatch(fetchAllMeals());
    dispatch(fetchCategories())
  },[state, categoriesState])

  return (
    <section className="my-[170px] mx-[30px]">

      <header className="mb-10">
        <h1 className="text-4xl lg:text-5xl font-semibold mb-4 text-gray-800">Recipe Explorer</h1>
        <p className="w-full md:w-1/2 text-gray-400 text-base leading-[20px]">
        Find easy, delicious, and quick recipes for every occasion. Whether you're a beginner or a pro, there's something for everyone!
        </p>
      </header>

      <form className="flex items-center max-w-sm ms-auto mb-16">   
          <label htmlFor="simple-search" className="sr-only">Search</label>
          <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className='w-[20px] fill-gray-700' enableBackground="new 0 0 48 48" height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M31,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C32,47.553,31.553,48,31,48z"/></g><g><path d="M37,31h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h4.996c-0.133-16.802-3.585-26.66-5.014-27.002     c-0.552,0-0.991-0.446-0.991-0.999C29.991,0.447,30.447,0,31,0c4.188,0,7,15.512,7,30C38,30.553,37.553,31,37,31z"/></g><g><path d="M17,18c-3.859,0-7-3.141-7-7V1c0-0.553,0.447-1,1-1s1,0.447,1,1v10c0,2.757,2.243,5,5,5s5-2.243,5-5V1     c0-0.553,0.447-1,1-1s1,0.447,1,1v10C24,14.859,20.859,18,17,18z"/></g><g><path d="M17,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C18,47.553,17.553,48,17,48z"/></g></g></g></svg>                        
              </div>
              <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5 focus-within:outline-none caret-red-700" placeholder="Search your recipe..." 
                onChange={(e) => {
                  setCategory("");
                  setSearchInput(e.target.value)
                }}/>
          </div>
          <button type="submit" className="p-2.5 ms-2 text-sm font-medium cursor-pointer text-white bg-red-600 rounded-lg border border-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
              <span className="sr-only">Search</span>
          </button>
      </form>

      <div>

        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white mb-20 bg-red-600 hover:bg-red-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" type="button">Select Category 
          <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>

        <div id="dropdownHover" className="z-10 hidden bg-white shadow-xl divide-y divide-gray-100 rounded-lg w-44">
            <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
              <li>
                <button className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                  setSearchInput("");
                  setCategory("");
                }} >
                  All
                </button>
              </li>
              {categoriesState && categoriesState.map((cat) => (
              <li key={cat.idCategory}>
                <button className="block px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setSearchInput("");
                  setCategory(cat.strCategory)
                }}
                >{cat.strCategory}</button>
              </li>
              ))}
            </ul>
        </div>

      </div>

      {filteredState ? (

      <div className="grid grid-cols-12 gap-7">

        {filteredState?.length > 0 ? filteredState.map((meal) => (

          <motion.div key={meal.idMeal} className="recipe col-span-12 md:col-span-6 lg:col-span-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:scale-105 hover:shadow-xl transition duration-500"
          initial={{ x: -200, opacity: 0}}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once:true, amount: 0 }}>

            <Link to={`/recipes/${meal.idMeal}`}>
                <img className="rounded-t-lg" src={meal.strMealThumb} alt={meal.strMeal} />
            </Link>

            <div className="p-5">
                <Link to={`/recipes/${meal.idMeal}`}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{meal.strMeal}</h5>
                </Link>
                <p className="mb-3 font-normal text-gray-600">{meal.strInstructions.slice(0, 50)}..</p>
                <Link to={`/recipes/${meal.idMeal}`} className="inline-flex items-center px-3 py-2 text-sm text-center w-fit font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 uppercase">
                  See Details
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </Link>
            </div>

          </motion.div>
        )) : (
          <h1 className="col-span-12 text-3xl font-bold text-center text-gray-900">No Meals Available..</h1>
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
