import "./Nav.css";
import Logo from "../assets/imgs/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Nav() {

    const location = useLocation();
    const navigate = useNavigate()

    useEffect(() => {
        const navLinks = document.querySelectorAll(".link");
        navLinks.forEach((l) => {
            if (l.getAttribute("href") === location.pathname) {
                l.classList.add("active");
            } else {
                l.classList.remove("active");
            }
        });
    }, [location.pathname]); 

  return (

    <nav className="bg-[#fbfbfb] shadow-md fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between md:justify-center lg:justify-between mx-auto px-4">
            <button to="/" className="flex items-center space-x-3 rtl:space-x-reverse md:mb-3 lg:mb-0"
                onClick={() => {
                    navigate("/");
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }}>
                <img src={Logo} className="w-40 md:w-56" alt="Recipe Hunter"/>
            </button>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse lg:hidden">
                <button data-collapse-toggle="navbar-sticky" type="button" className="burger-icon inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:text-red-600" aria-controls="navbar-sticky" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
            </div>
            <div className="nav-links items-center justify-between hidden w-full md:flex md:mx-auto lg:mx-0 md:w-auto md:order-1" id="navbar-sticky">
                <ul className="flex flex-col p-4 md:p-0 font-medium border border-gray-100 rounded-lg !bg-[#fbfbfb] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                    <li className="text-center mb-3 lg:mb-0">
                        <Link to={`/`} className={`link block text-gray-900 px-3 transition-all hover:text-red-600 border-b border-b-transparent hover:border-b-red-600 md:bg-transparent ${location.pathname === "/" ? "active" : ''}`} aria-current="page">Home</Link>
                    </li>
                    <li className="text-center mb-3 lg:mb-0">
                        <Link to="/recipes" className={`link block text-gray-900 px-3 transition-all hover:text-red-600 border-b border-b-transparent hover:border-b-red-600 md:hover:bg-transparent ${location.pathname === "/recipes" ? "active" : ""}`}>Recipes</Link>
                    </li>
                    <li className="text-center mb-3 lg:mb-0">
                        <Link to="/categories" className={`link block text-gray-900 px-3 transition-all hover:text-red-600 border-b border-b-transparent hover:border-b-red-600 md:hover:bg-transparent ${location.pathname === "/categories" ? "active" : ""}`}>Categories</Link>
                    </li>
                    <li className="text-center mb-3 lg:mb-0">
                        <Link to="/suggest-recipe" className={`link block text-gray-900 px-3 transition-all hover:text-red-600 border-b border-b-transparent hover:border-b-red-600 md:hover:bg-transparent ${location.pathname === "/suggest-recipe" ? "active" : ""}`}>Suggest a Recipe</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  )
}
