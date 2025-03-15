import { Link } from "react-router";
import Img from "../../assets/imgs/about1.png";
import Img1 from "../../assets/imgs/plate.png";
import { motion } from "framer-motion";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="bg-[#e4e4e480] pb-20 lg:pt-16 lg:pb-16">
      <div className="flex flex-col lg:flex-row">
        <motion.div className="basis-1/2 rotate-90 lg:rotate-0 relative "
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once:true, amount: 0.4 }}
        >
            <img src={Img} alt="About us" className="max-w-full"/>
            <img src={Img1} className="plate max-w-full absolute top-0 " alt="About Plate"/>
        </motion.div>
        <motion.div className="basis-1/2 flex flex-col justify-center items-center"
          initial={{ opacity: 0}}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once:true, amount: 0.4 }}
        >
            <h3 className="text-4xl font-bold mb-5">About Us</h3>
            <p className="text-base md:text-lg text-zinc-500 leading-[22px] mx-10 lg:mx-4">
            Welcome to Recipe Hunter, your ultimate companion in the kitchen! We believe that cooking should be fun, easy, and accessible to everyone, whether you're a beginner or a seasoned chef. Our platform is designed to help you discover delicious recipes from around the world, tailored to your taste and dietary preferences.
            <br/><br/>At Recipe Hunter, we make meal planning effortless by offering a vast collection of recipes, complete with step-by-step instructions, ingredient lists, and nutritional information. Whether you’re looking for quick weekday meals, healthy options, or indulgent treats, we’ve got you covered.
            <br/><br/>Join us on this culinary adventure, explore new flavors, and turn every meal into a masterpiece!
            </p>
            <Link to={`/recipes`} className="block relative z-10 w-fit mt-8 mx-auto text-base md:text-lg font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-8 md:px-10 py-2">
                Explore
            </Link>
        </motion.div>
      </div>
    </section>
  )
}
