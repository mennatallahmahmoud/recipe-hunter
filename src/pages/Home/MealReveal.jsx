import { useEffect, useMemo, useState } from "react";
import "./MealReveal.css";
import { initFlowbite } from "flowbite";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMeals } from "../../rtk/slices/Meals-Slice";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "./../../../Animation - 1742002097683.json";

export default function MealReveal() {
        
    const [meal, setMeal] = useState(null)
    const allState = useSelector((state) => state.meals.meals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMeals())
        initFlowbite();
    }, [dispatch])

    const getMeal = () => {
        document.querySelector("#loading").classList.add("active")
        if(allState && allState.length > 0) {
            setMeal(allState[Math.floor(Math.random() * allState.length)])
        }
        setTimeout(() => {
            document.querySelector("#loading").classList.remove("active")
        }, 5000);
    }


    return (
        <section id="reveal-sec" className="reveal-container py-20 h-screen flex justify-center items-center flex-col">
            <div className='header text-center mb-10 mx-4'>
                <motion.h2 className='text-3xl md:text-5xl font-bold mb-5'
                    initial={{ x: -150, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5}}
                    viewport={{ once:true, amount: 0.4 }}
                >Mystery Meal Reveal</motion.h2>
                <motion.p className='text-sm md:text-lg text-zinc-500 leading-[22px] tracking-[1.5px]'
                    initial={{ x: 150, opacity: 0}}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1.5}}
                    viewport={{ once:true, amount: 0.4 }}>
                Feeling indecisive? Let fate decide your next meal!<br/>Get ready for a delicious adventure!
                </motion.p>
            </div>
            <div>
                <motion.button data-modal-target="popup-modal" data-modal-toggle="popup-modal"  className="block mx-auto text-base md:text-2xl font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-3 md:px-14 py-2.5 uppercase"
                    onClick={getMeal}
                    initial={{ y: 150, opacity: 0}}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once:true, amount: 0.1 }}>
                    Click to unveil your next meal!
                </motion.button>
            </div>

            <motion.div id="popup-modal" tabIndex="-1" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.6 },
            }}
            viewport={{ once:false, amount: 0.4 }}>
                <div className="relative p-4 w-[90%] lg:w-[30%] max-h-full">
                    <div className="relative bg-white rounded-lg shadow-sm p-5 min-h-[450px]">
                        <button type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:text-red-600 cursor-pointer rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="popup-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {meal && (
                        <motion.div className="p-4 md:p-5 text-center relative" key={Date.now()}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.4,
                            scale: { type: "spring", visualDuration: 0.4, bounce: 0.4 },
                        }}
                        viewport={{ once:false, amount: 0.4 }}>
                            <img src={meal.strMealThumb} className="max-w-full rounded-lg" alt={meal.strMeal}/>
                            <h3 className="my-5 text-2xl font-bold italic text-gray-800 ">{meal.strMeal}</h3>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <Link to={`/recipes/${meal.idMeal}`} data-modal-hide="popup-modal" type="button" className="text-white cursor-pointer bg-red-500 hover:bg-red-600 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                    onClick={() => {
                                        document.querySelector('[data-modal-hide="popup-modal"]').click();
                                    }}>
                                    How to Make It?
                                </Link>
                                <Link  data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 text-sm cursor-pointer font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-200 hover:text-grey-700"
                                onClick={getMeal}
                                >Try Again</Link>
                            </div>
                        </motion.div>
                        )}
                        <div id="loading" role="status" className="absolute w-full h-full top-0 left-0 px-4 rounded-lg flex-col justify-center items-center bg-white">
                            <span className="w-1/2">
                                <Lottie animationData={animationData} loop autoplay className="loader"/>
                            </span>
                            <span className="text-lg font-semibold text-center mb-[60px]">Searching for your perfect bite...</span>
                        </div>
                    </div>
                </div>
            </motion.div>


        </section>
    );
}
