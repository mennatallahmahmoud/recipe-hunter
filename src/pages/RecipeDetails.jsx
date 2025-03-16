import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeals } from "../rtk/slices/Meals-Slice";
import { Link, useParams } from "react-router-dom";
import "./Details.css";
import { motion } from "framer-motion";


export default function stateDetails() {

    const params = useParams().id;
    const allState = useSelector((state) => state.meals.meals);
    const state = allState && allState.find((m) => m.idMeal === params);
    const dispatch = useDispatch();

    const img = state && state.strMealThumb

    useEffect(() => {
        dispatch(fetchAllMeals())
    }, [state])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    

    const ingredients = state && Object.entries(state).filter(([k, v]) => {
        return k.startsWith("strIngredient") && v !== ""
    }).map(([k, v]) => v);

    const ingredientsMeasures = state && Object.entries(state).filter(([k, v]) => {
        return k.startsWith("strMeasure") && (v !== " " && v !== "") 
    }).map(([k, v]) => v);

  return (
    <section className="meal-container bg-cover bg-center " style={{backgroundImage: `url(${img})`}}>
        <div className="py-[170px] px-[30px]">
          {state ? (
          <div className="bg-[#f0f0f0e8] shadow-xl rounded-sm lg:w-3/4 mx-auto py-10 px-6 border border-[#eeeeee]">
            <div className="max-w-full bg-transparent flex flex-col lg:flex-row items-center mb-5 relative z-10">
                <div className="basis-1/2">
                    <img className="rounded-lg mx-auto lg:mx-0 lg:ms-auto max-w-full overflow-hidden mb-10 md:w-3/4 lg:w-1/2" src={state.strMealThumb} alt={state.strMeal} />
                </div>
                <div className="p-5 basis-1/2">
                    <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">Name: {state.strMeal}</h5>
                    <h5 className="mb-5 text-xl font-semibold tracking-tight text-gray-900">Category: <span className="font-normal">{state.strCategory}</span></h5>
                    <h5 className="mb-5 text-xl font-semibold tracking-tight text-gray-900">Cuisine: <span className="font-normal">{state.strArea}</span></h5>
                </div>
            </div>
            <motion.p className="mb-5 text-xl font-semibold text-gray-900 relative z-10"
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true, amount: 0 }}>How to make it? <br/> 
                <span className="block text-base font-normal text-gray-700 mt-3">{state.strInstructions}</span>
            </motion.p>
            <motion.div className="mb-5 text-xl font-semibold text-gray-900 relative z-10"
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true, amount: 0 }}>Ingredients: <br/> 
                <div className="flex mt-3 font-normal">
                    <div>
                    {ingredients && ingredients.map((x, i) => (
                        <span key={`0${i}`} className="text-base text-gray-700 flex items-center mb-1">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg> */}
                            <svg className="w-8 me-2" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><g id="Grid"><path d="M66.5,94h-34A19.53,19.53,0,0,1,13,74.5V64.61A1.61,1.61,0,0,1,14.61,63H84.39A1.61,1.61,0,0,1,86,64.61V74.5A19.53,19.53,0,0,1,66.5,94ZM16,66v8.5A16.52,16.52,0,0,0,32.5,91h34A16.52,16.52,0,0,0,83,74.5V66Z"/><path d="M14.5,59a1.5,1.5,0,0,1-.58-2.88,92.46,92.46,0,0,1,71.16,0,1.5,1.5,0,1,1-1.16,2.76,89.54,89.54,0,0,0-68.84,0A1.51,1.51,0,0,1,14.5,59Z"/><path d="M56.5,45A1.5,1.5,0,0,1,55,43.5a5.5,5.5,0,0,0-11,0,1.5,1.5,0,0,1-3,0,8.5,8.5,0,0,1,17,0A1.5,1.5,0,0,1,56.5,45Z"/><path d="M119.5,66h-28a1.5,1.5,0,0,1,0-3h28a1.5,1.5,0,0,1,0,3Z"/></g></svg>
                            {x} 
                        </span>
                    ))}
                    </div>
                    <div>
                    {ingredientsMeasures && ingredientsMeasures.map((x, i) => (
                        <span key={`00${i}`} className="text-base text-gray-700 flex items-center mb-1 ms-2">
                            ({x}) 
                        </span>
                    ))}
                    </div>
                </div>
            </motion.div>
            <Link to={state.strYoutube} target="_blank" className="block relative z-10 w-fit mt-8 ms-auto text-base md:text-lg font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-4 md:px-6 py-2">
                Watch Tutorial
            </Link>
          </div>
          ) : (
          <div className="flex relative justify-center items-center z-10">
              {Array.from({length: 1}).map((d, i) => (
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
  
        </div>
      </section>
  )
}
