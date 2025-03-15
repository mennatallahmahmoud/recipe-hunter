import HeroVideo from "../../assets/imgs/logo-vid.mp4"

export default function Hero() {
  
  return (
    <section className="hero-section h-screen relative">
      <video autoPlay playsInline loop muted preload="auto" className="w-full h-full object-cover">
        <source src={HeroVideo} type="video/mp4"/>
      </video>
      <div className="hero-content absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 z-10 text-white text-center w-full">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 mx-4">Savor the Flavor, Cook with Passion!</h1>
        <p className="text-slate-200 text-xl mx-3 lg:mx-auto mb-10">
        Discover a world of flavors with delicious recipes!<br/>Try, create, and enjoy every bite
        </p>
        <button className="text-xl md:text-2xl font-bold cursor-pointer focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 px-10 md:px-14 py-2.5 me-2 mb-2 uppercase"
          onClick={() => {
            document.querySelector("#meals-slider").scrollIntoView({behavior: 'smooth', block: 'center'})
          }}
        >Find Recipes</button>
      </div>
    </section>
  )
}
