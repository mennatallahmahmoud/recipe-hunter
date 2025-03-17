import { Link, useLocation, useNavigate } from "react-router";
import Logo from "../assets/imgs/logo.png";
import { useEffect, useRef } from "react";

export default function Footer() {

    const navigate = useNavigate();
    const location = useLocation();
    const year = new Date().getFullYear();
    const scrollBtn = useRef(null);

    useEffect(() => {
        
        const handleScroll = () => {
            if (scrollBtn.current) {
                if (window.scrollY > 1500) {
                    scrollBtn.current.classList.remove("-right-20");
                    scrollBtn.current.classList.add("right-10");
                } else {
                    scrollBtn.current.classList.add("-right-20");
                    scrollBtn.current.classList.remove("right-10");
                }
            }
        };

        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }

        scrollBtn.current.addEventListener("click", scrollToTop)
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollBtn]);

        
    const scrollToAbout = () => {
        if(location.pathname === '/') {
            document.getElementById("about")?.scrollIntoView({behavior: "smooth"})
        } else {
            navigate('/');
            setTimeout(() => {
                document.getElementById("about")?.scrollIntoView({behavior: "smooth"})
            }, 100);
        }
    }
    

    
  return (
    <div>

        <footer className="bg-white relative z-10 px-4">
            <hr className="border-gray-200 sm:mx-auto" />
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-center relative">
                <div className="grid grid-cols-3 text-center">
                    <Link to="/" className="col-span-3 block md:mb-6 sm:mb-0 space-x-3 mx-auto">
                        <img src={Logo} className="w-40 md:w-56" alt="Recipe Hunter" />
                    </Link>
                    <ul className="col-span-3 md:col-span-1 flex flex-col items-start mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                        <li className="font-bold text-lg text-gray-700 mb-3">
                            About
                        </li>
                        <li className="mb-2">
                            <Link to="/recipes" className="hover:text-red-600 me-4 md:me-6">Recipes</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="/categories" className="hover:text-red-600 me-4 md:me-6">Categories</Link>
                        </li>
                        <li className="mb-2">
                            <button className="hover:text-red-600 me-4 md:me-6" onClick={scrollToAbout}>About</button>
                        </li>
                        <li className="mb-2">
                            <Link to="/suggest-recipe" className="hover:text-red-600 me-4 md:me-6">Suggest a Recipe</Link>
                        </li>
                    </ul>
                    <div className="col-span-3 md:col-span-1 text-start  mb-6">
                        <h5 className="font-bold text-lg text-gray-700 mb-3">Newsletters</h5>
                        <p className="text-sm text-start text-gray-500 mb-5">
                        Do you want to find out when our latest recipes is available? Subscribe NOW for our newsletter and get the latest monthly recipes.
                        </p>
                        <div className="relative mb-6">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg>
                            </div>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus-within:outline-none focus:border caret-red-600 block w-full ps-10 p-2.5" placeholder="name@gmail.com"/>
                            <Link to="mailto:mennamahamed3@gmail.com" className="inline-block absolute top-1/2 -translate-y-1/2 border border-yellow-400 hover:border-yellow-500 right-0 w-fit text-sm font-semibold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-3 py-2.5 uppercase">Subscribe</Link>
                        </div>
                    </div>
                    <ul className="col-span-3 md:col-span-1 text-start md:ms-auto  mb-6">
                        <li className="font-bold text-lg text-gray-700 mb-3">
                            Contact
                        </li>
                        <li className="flex justify-start items-center gap-2 mb-2">
                            <svg enableBackground="new 0 0 32 32" height="18px" version="1.1" viewBox="0 0 32 32" width="18px" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><g id="Gmail"><path d="M27,27c-0.276,0-0.5-0.224-0.5-0.5v-13c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v13   C27.5,26.776,27.276,27,27,27z" fill="#263238"/><path d="M5,27c-0.276,0-0.5-0.224-0.5-0.5v-13C4.5,13.224,4.724,13,5,13s0.5,0.224,0.5,0.5v13   C5.5,26.776,5.276,27,5,27z" fill="#263238"/><g><path d="M16,14.432c-0.099,0-0.197-0.029-0.282-0.087L3.553,6.021c-0.228-0.156-0.286-0.467-0.13-0.695    c0.156-0.228,0.466-0.287,0.695-0.13L16,13.326l8.958-6.129c0.229-0.156,0.54-0.097,0.695,0.13    c0.156,0.228,0.098,0.539-0.13,0.695l-9.24,6.322C16.197,14.403,16.099,14.432,16,14.432z" fill="#263238"/></g><g><path d="M28.5,27h-25C2.122,27,1,25.878,1,24.5v-17C1,7.224,1.224,7,1.5,7S2,7.224,2,7.5v17    C2,25.327,2.673,26,3.5,26h25c0.827,0,1.5-0.673,1.5-1.5v-17C30,6.673,29.327,6,28.5,6C28.224,6,28,5.776,28,5.5S28.224,5,28.5,5    C29.878,5,31,6.122,31,7.5v17C31,25.878,29.878,27,28.5,27z" fill="#263238"/></g><g><path d="M16,19c-0.099,0-0.198-0.029-0.284-0.088L2.066,9.498C1.398,9.038,1,8.278,1,7.467    C1,6.107,2.107,5,3.467,5h25.065C29.893,5,31,6.107,31,7.467c0,0.811-0.398,1.57-1.066,2.031l-13.65,9.414    C16.198,18.971,16.099,19,16,19z M3.467,6C2.658,6,2,6.658,2,7.467C2,7.95,2.237,8.401,2.634,8.675L16,17.893l13.366-9.218    C29.763,8.401,30,7.95,30,7.467C30,6.658,29.342,6,28.533,6H3.467z" fill="#263238"/></g></g></svg>
                            <Link to={`mailto:mennamahamed3@gmail.com`} className="text-sm text-gray-500 hover:text-red-600">info@recipehunter.com</Link>
                        </li>
                        <li className="flex justify-start items-center gap-2 mb-2">
                            <svg className="w-[23px] h-[23px]" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none"/><path d="M159.4,40A80.1,80.1,0,0,1,216,96.6" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><path d="M151.1,70.9a47.9,47.9,0,0,1,34,34" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/><path d="M92.5,124.8a83.6,83.6,0,0,0,39,38.9,8,8,0,0,0,7.9-.6l25-16.7a7.9,7.9,0,0,1,7.6-.7l46.8,20.1a7.9,7.9,0,0,1,4.8,8.3A48,48,0,0,1,176,216,136,136,0,0,1,40,80,48,48,0,0,1,81.9,32.4a7.9,7.9,0,0,1,8.3,4.8l20.1,46.9a8,8,0,0,1-.6,7.5L93,117A8,8,0,0,0,92.5,124.8Z" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"/></svg>                            
                            <Link to={`tel:+00123456789`} className="text-sm text-gray-500 hover:text-red-600">+0012 3456 789</Link>
                        </li>
                        <li className="flex items-center">
                            <a href="https://www.facebook.com" className="me-[3px]" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                </svg>
                            </a>
                            <a href="https://www.instagram.com" className="me-[3px]" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                            </a>
                            <a href="https://www.youtube.com" target="_blank">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="22" height="22" viewBox="0 0 48 48">
                                    <linearGradient id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1" x1="9.816" x2="41.246" y1="9.871" y2="41.301" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f44f5a"></stop><stop offset=".443" stopColor="#ee3d4a"></stop><stop offset="1" stopColor="#e52030"></stop></linearGradient><path fill="url(#PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1)" d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"></path><path d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z" opacity=".05"></path><path d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z" opacity=".07"></path><path fill="#fff" d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
                <svg ref={scrollBtn} className="w-[50px] h-[60px] transition-all duration-1000 fixed bottom-10 -right-20 cursor-pointer fill-red-500 hover:fill-red-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm1 10h3l-4-4-4 4h3v4h2v-4z"/></g></svg>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center">© {year} <Link href="https://github.com/mennatallahmahmoud" className="hover:underline">Mennat-Allah</Link>. All Rights Reserved.</span>
            </div>
        </footer>

    </div>
  )
}
