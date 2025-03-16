import { useEffect } from "react";
import Categories from "./Categories";
import Hero from "./Hero";
import MealReveal from "./MealReveal";
import Carousel from "./Slider";
import About from "./About";
import "./Slider.css";

export default function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <section className="pt-[46px] md:pt-[92px] overflow-hidden">
        <Hero />
        <Carousel/>
        <MealReveal />
        <About />
        <Categories />
    </section>
  )
}
