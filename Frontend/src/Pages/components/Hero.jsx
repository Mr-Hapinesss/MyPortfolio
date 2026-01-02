import {Link} from "react-router-dom";

function Hero() {
  return (
    <section className="relative bg-blue-100 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-blue-500 font-semibold tracking-wide uppercase text-sm mb-2">
              Fullstack Software Developer
            </h2>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Building the future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">MERN & Socket.io</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              I specialize in high-performance web and mobile applications. 
              From the architectural precision of <span className="font-semibold">TypeScript</span> and <span className="font-semibold">Django </span>  
              to real-time interactivity powered by <span className="font-semibold">Socket.io</span>, 
              I build robust, scalable solutions tailored to modern business needs.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-3 bg-gray-400 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">
                <Link to={"/projects"}>View Projects</Link>
              </button>
              <button className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                <Link to={"/contact"}>Contact Me</Link>
              </button>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
}

export default Hero;