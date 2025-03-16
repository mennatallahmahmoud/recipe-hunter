import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAllMeals } from '../../rtk/slices/Meals-Slice';
import { Link } from 'react-router';
import { motion } from "framer-motion";


export default function Carousel() {

    const state = useSelector((state) => state.meals.meals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllMeals())
    }, [state])

    return (

        <section id='meals-slider' className='bg-[#e4e4e480]'>
            <motion.div className='container mx-auto py-20'
            initial={{ x: -100, opacity: 0}}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5}}
            viewport={{ once:true, amount: 0.4 }}>
                <div className='header text-center mb-20 mx-4'>
                    <h2 className='text-4xl md:text-5xl font-bold mb-5'>Taste the Best</h2>
                    <p className='text-base md:text-lg md:w-1/2 lg:w-[40%] mx-4 md:mx-auto text-zinc-400 leading-[22px]'>Discover a variety of mouthwatering meals, Find your next favorite dish!</p>
                </div>
                <div>
                    <div className={`overflow-hidden ${!state ? 'flex justify-between' : ''}`}>
                        {state ? (
                        <div className="meals flex w-[500%]">
                        {state?.length > 0 && state.map((meal) => (
                            <div className="text-center m-5 rounded-xl relative" key={meal.idMeal}>
                                <div className="meal-img overflow-hidden relative">
                                    <Link to={`/recipes/${meal.idMeal}`} className='img-overlay absolute hidden w-full h-full rounded-2xl bg-[#00000085] text-white justify-center items-center text-xl font-bold uppercase'>
                                        Find Recipe
                                    </Link>
                                    <img src={meal.strMealThumb} alt={meal.strMeal} className='!h-full rounded-2xl min-w-[200px]'/>
                                </div>
                                <svg className='absolute w-[30px] left-1/2 -translate-x-1/2 my-5' enableBackground="new 0 0 48 48" height="48px" version="1.1" viewBox="0 0 48 48" width="48px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Expanded"><g><g><path d="M31,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C32,47.553,31.553,48,31,48z"/></g><g><path d="M37,31h-6c-0.553,0-1-0.447-1-1s0.447-1,1-1h4.996c-0.133-16.802-3.585-26.66-5.014-27.002     c-0.552,0-0.991-0.446-0.991-0.999C29.991,0.447,30.447,0,31,0c4.188,0,7,15.512,7,30C38,30.553,37.553,31,37,31z"/></g><g><path d="M17,18c-3.859,0-7-3.141-7-7V1c0-0.553,0.447-1,1-1s1,0.447,1,1v10c0,2.757,2.243,5,5,5s5-2.243,5-5V1     c0-0.553,0.447-1,1-1s1,0.447,1,1v10C24,14.859,20.859,18,17,18z"/></g><g><path d="M17,48c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1s1,0.447,1,1v46C18,47.553,17.553,48,17,48z"/></g></g></g></svg>                        
                                <h3 className='text-xl text-center font-bold mt-20 tracking-[1px]'>{meal.strMeal}</h3>
                            </div>
                        ))}
                        </div>
                        ) : (
                        Array.from({length: 3}).map((d, i) => (
                            <div key={i} role="status" className="flex items-center justify-center basis-[30%] h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                                </svg>
                            </div>
                        ))
                        )}
                    </div>
                </div>
                <Link to="/recipes" className="block w-fit mx-auto mt-20 text-xl md:text-2xl font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-10 md:px-14 py-2.5 uppercase">See All Recipes</Link>
            </motion.div>
        </section>

    )
}

 
