import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../rtk/slices/Categories-Slice";
import { fetchAllMeals } from "../rtk/slices/Meals-Slice";

export default function SuggestForm() {
  

  const [prepTime, setPrepTime] = useState(0);
  const [cookingTime, setCookingTime] = useState(0);

  const catsState = useSelector((state) => state.cats);
  const mealsState = useSelector((state) => state.meals);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchAllMeals())
  }, [catsState, mealsState])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleIncrement = (duration) => {
    duration((prev) => +prev + 1)
  }

  const handleDecrement = (duration) => {
    duration((prev) => prev > 0 ? prev - 1 : 0)
  }



  return (
    <section className="bg-[#e4e4e44d]">

      <div className="pt-[170px] pb-[100px] px-[30px]">
        
        <header className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-semibold mb-4 text-gray-800">Got a Great Recipe? Share It!</h1>
          <p className="w-full lg:w-[35%] text-gray-400 text-base leading-[20px]">
          We’d love to hear from you! Submit your favorite recipe and get featured on our platform.
          </p>
        </header>
        
        <form className="max-w-[90%] lg:max-w-[75%] mx-auto" onClick={(e) => e.preventDefault()}>

          <div className="relative z-0 w-full mb-7 group">
            <label htmlFor="recipe-name" className="block mb-2 text-sm font-medium text-gray-900">Recipe Name</label>
            <input type="text" id="recipe-name" className="bg-gray-50 border border-gray-300 focus-within:outline-none text-gray-900 text-sm rounded-lg focus:border-red-600 block w-full p-2.5 caret-red-600" placeholder="Shawarma..." required />
          </div>

          <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="categories" className="block mb-2 text-sm font-medium text-gray-900">Categories</label>
              <select id="categories" className="bg-gray-50 border border-gray-300 focus-within:outline-none text-gray-900 text-sm rounded-lg focus:border-red-600 caret-red-600 block w-full p-2.5">
                <option defaultValue>Choose a category</option>
                {catsState && catsState.map((cat) => (
                  <option value={cat.strCategory} key={cat.idCategory}>{cat.strCategory}</option>
                ))}
              </select>
            </div>
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="cuisines" className="block mb-2 text-sm font-medium text-gray-900">Cuisines</label>
              <select id="cuisines" className="bg-gray-50 border border-gray-300 focus-within:outline-none text-gray-900 text-sm rounded-lg focus:border-red-600 caret-red-600 block w-full p-2.5">
                <option defaultValue>Choose a cuisine</option>
                {mealsState && mealsState.map((meal) => (
                  <option value={meal.strArea} key={meal.strMeal}>{meal.strArea}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="prepration-time" className="block mb-2 text-sm font-medium text-gray-900">Preparation Time by minutes</label>
              <div className="relative flex items-center max-w-[8rem]">
                  <button type="button" id="decrement-button" className="bg-gray-100 hover:bg-gray-200 border focus:border-red-600 border-gray-300 rounded-s-lg p-3 h-11 focus:outline-none"
                  onClick={() => handleDecrement(setPrepTime)}>
                      <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                      </svg>
                  </button>
                  <input type="text" value={prepTime || 0} id="prepration-time" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus-within:outline-none focus:red-600 block w-full py-2.5" placeholder="0" required 
                  onChange={(e) => setPrepTime(e.target.value)}/>
                  <button type="button" id="increment-button" className="bg-gray-100 hover:bg-gray-200 border focus:border-red-600 border-gray-300 rounded-e-lg p-3 h-11 focus:outline-none"
                  onClick={() => handleIncrement(setPrepTime)}>
                      <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                      </svg>
                  </button>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="cooking-time" className="block mb-2 text-sm font-medium text-gray-900">Cooking Time by minutes</label>
              <div className="relative flex items-center max-w-[8rem]">
                  <button type="button" id="decrement-button" className="bg-gray-100 hover:bg-gray-200 border focus:border-red-600 border-gray-300 rounded-s-lg p-3 h-11 focus:outline-none"
                  onClick={() => handleDecrement(setCookingTime)}>
                      <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
                      </svg>
                  </button>
                  <input type="text" value={cookingTime || 0} id="cooking-time" aria-describedby="helper-text-explanation" className="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus-within:outline-none focus:border-red-500 block w-full py-2.5" placeholder="0" required 
                  onChange={(e) => setCookingTime(e.target.value)}/>
                  <button type="button" id="increment-button" className="bg-gray-100 hover:bg-gray-200 border focus:border-red-600 border-gray-300 rounded-e-lg p-3 h-11 focus:outline-none"
                  onClick={() => handleIncrement(setCookingTime)}>
                      <svg className="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                      </svg>
                  </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="ingredients" className="block mb-2 text-sm font-medium text-gray-900">Recipe Ingredients</label>
              <textarea id="ingredients" rows="4" className="block p-2.5 w-full h-[200px] resize-none focus-within:outline-none overflow-y-scroll text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-red-600 caret-red-600" placeholder="Write recipe ingredients here..."></textarea>
            </div>
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="instructions" className="block mb-2 text-sm font-medium text-gray-900">Recipe Instructions</label>
              <textarea id="instructions" rows="4" className="block p-2.5 w-full h-[200px] resize-none focus-within:outline-none overflow-y-scroll text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-red-600 caret-red-600" placeholder="Write recipe instructions here..."></textarea>
            </div>
          </div>

          <hr className="my-6 border-gray-300 sm:mx-auto lg:my-10"/>
          <h3 className="mb-9 text-2xl font-semibold text-gray-800">Chef Info</h3>

          <div className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Full Name</label>
              <input type="text" id="username" className="bg-gray-50 border border-gray-300 focus-within:outline-none text-gray-900 text-sm rounded-lg caret-red-600 focus:border-red-600 block w-full p-2.5" placeholder="Your name..." required />
            </div>
            <div className="col-span-12 md:col-span-6 relative z-0 w-full mb-7 group">
              <label htmlFor="user-email" className="block mb-2 text-sm font-medium text-gray-900">Email Address</label>
              <input type="email" id="user-email" className="bg-gray-50 border border-gray-300 focus-within:outline-none text-gray-900 text-sm rounded-lg caret-red-600 focus:border-red-600 block w-full p-2.5" placeholder="Your email..." required />
            </div>
          </div>

          <button type="submit" className="block w-fit mx-auto mt-15 text-base md:text-lg font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-6 md:px-8 py-2">Submit</button>
        </form>
        
      </div>

    </section>
  )
}
