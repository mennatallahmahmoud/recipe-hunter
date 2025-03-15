import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { fetchCategories } from "../rtk/slices/Categories-Slice";
import "./Details.css";
import { motion } from "framer-motion";


export default function CategoryDetails() {

    const params = useParams().id;
    const state = useSelector((state) => state.cats.categories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategories())
    }, [state])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const category = state && state.filter((cat) => {
        return params.toString() === cat.idCategory
    })[0]

    const img = category && category.strCategoryThumb;

  return (
    <section className="meal-container bg-transparent bg-cover bg-center" style={{backgroundImage: `url(${img})`}}>
        <div className="py-[170px] px-[30px]">
        {category ? (
        <>
        <div className="relative bg-[#f0f0f0e8] shadow-xl flex flex-col items-center mb-5 lg:w-3/4 mx-auto p-12 border border-[#eeeeee]" >
            <div className="basis-1/2 text-center relative z-10">
                <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900">{category.strCategory}</h5>
                <img className="rounded-lg mx-auto lg:mx-0 max-w-full overflow-hidden mb-10 w-full" src={category.strCategoryThumb} alt={category.strCategory} />
            </div>
            <motion.div className="p-5 basis-1/2 relative z-10"
            initial={{ y: 100, opacity: 0}}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true, amount: 0 }}>
                <p className="mb-5 text-base font-normal tracking-tight text-gray-700">{category.strCategoryDescription}</p>
            </motion.div>
            <Link to={`/recipes`} className="block relative z-10 w-fit text-lg md:text-xl font-semibold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-4 md:px-6 py-2 mb-2 mx-auto"
            >Find Recipes</Link>
        </div>
        </>
        ) : (
        <div className="flex justify-center items-center relative z-10">
            {Array.from({length: 1}).map((d, i) => (
              <div key={i} role="status" className="flex flex-col w-3/4 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
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
