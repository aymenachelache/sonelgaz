// import img1 from "./../../assets/banner_09_agence_sonelgaz_pc_6315fc5589b3d3.32148502.jpeg";

// const Hero = () => {
//     return (
//         <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
//             <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
//                 <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
//                     <div className="flex items-center justify-between">
//                         <div className="flex flex-shrink-0">
//                             <a href="#" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
//                                 <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="BakerStreet" />
//                             </a>
//                         </div>
//                         <div className="md:hidden">
//                             <button className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
//                                 <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                                 </svg>
//                             </button>
//                         </div>
//                         <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
//                             <a href="#" className="text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">About</a>
//                             <a href="#" className="text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">Services</a>
//                             <a href="#" className="text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">Contacts</a>
//                         </nav>
//                     </div>
//                 </div>
//             </header>
//             <div className="absolute inset-0">
//                 <img className="object-cover w-full h-full opacity-60" src={img1} alt="" />
//             </div>
//             <div className="relative">
//                 <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl text-center">
//                     <h1 className="tracking-tighter text-white">
//                         <span className="font-sans font-normal text-5xl">Éclairez l'avenir avec Sonelgaz</span><br />
//                         <span className="font-serif italic font-normal text-2xl">Votre partenaire énergétique de confiance</span>
//                     </h1>
//                     <p className="mt-5 text-base font-normal text-white text-opacity-70">
//                         Découvrez nos services et rejoignez la transition énergétique dès aujourd’hui !
//                     </p>
//                     <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
//                         <a href="#" className="px-5 py-2 text-base font-semibold leading-6 transition-all duration-200 border-2 border-transparent rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary">Get started</a>
//                         <a href="#" className="px-5 py-2 text-base font-semibold leading-6 transition-all duration-200 bg-transparent border-2 border-white rounded-full sm:leading-8 text-white hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary flex items-center">
//                             <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                 <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
//                             </svg>
//                             Watch trailer
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
//                 <a href="#" className="inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
//                     <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                     </svg>
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Hero;


import { Link } from "react-scroll";
import img1 from "./../../assets/banner_09_agence_sonelgaz_pc_6315fc5589b3d3.32148502.jpeg";

const Hero = () => {
    return (
        <div className="relative h-[calc(100vh+80px)] pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
            <header className="absolute inset-x-0 top-0 z-10 py-8 xl:py-12">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-shrink-0">
                            <a href="#" className="inline-flex rounded-md focus:outline-none focus:ring-2 focus:ring-offset-4 focus:ring-offset-secondary focus:ring-primary">
                                <img className="w-auto h-8" src="https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo.svg" alt="Sonelgaz" />
                            </a>
                        </div>
                        <div className="md:hidden">
                            <button className="p-2 -m-2 transition-all duration-200 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                        <nav className="hidden md:flex md:items-center md:space-x-10 lg:ml-28">
                            <a href="#" className="text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">À propos</a>
                            <a href="#" className="text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">Services</a>
                            <a href="#" className="text-white transition-all duration-200 rounded focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">Contact</a>
                        </nav>
                    </div>
                </div>
            </header>
            <div className="absolute inset-0">
                <img className="object-cover w-full h-full opacity-60" src={img1} alt="Sonelgaz Banner" />
            </div>
            <div className="relative">
                <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl text-center">
                    <h1 className="tracking-tighter text-white">
                        <span className="font-sans font-normal text-5xl">Éclairez l'avenir avec Sonelgaz</span><br />
                        <span className="font-serif italic font-normal text-2xl">Votre partenaire énergétique de confiance</span>
                    </h1>
                    <p className="mt-5 text-base font-normal text-white text-opacity-70">
                        Découvrez nos services et rejoignez la transition énergétique dès aujourd’hui !
                    </p>
                    <div className="flex items-center justify-center mt-8 space-x-3 sm:space-x-4">
                        <button href="#" className="px-5 pt-3 pb-2 text-base font-semibold leading-6 transition-all duration-500 border border-primary rounded-full sm:leading-8 bg-white sm:text-lg text-black hover:bg-transparent hover:text-white outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary">Get started</button>
                        <button href="#" className="px-5 pt-3 pb-2 text-base font-semibold leading-6 transition-all duration-500 bg-transparent border border-primary rounded-full sm:leading-8 text-white hover:bg-white outline-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:text-black sm:text-lg focus:ring-offset-secondary flex items-center">
                            <svg className="mb-1 w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.0416 4.9192C7.37507 4.51928 6.5271 4.99939 6.5271 5.77669L6.5271 18.2232C6.5271 19.0005 7.37507 19.4806 8.0416 19.0807L18.4137 12.8574C19.061 12.469 19.061 11.5308 18.4137 11.1424L8.0416 4.9192Z" />
                            </svg>
                            Watch trailer
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute hidden transform -translate-x-1/2 lg:bottom-8 xl:bottom-12 left-1/2 lg:block">
                <Link to="home" smooth={true} className="pointer flexNullCenter inline-flex items-center justify-center w-12 h-12 transition-all duration-200 rounded-full text-white hover:bg-white hover:text-black bg-black focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary focus:ring-offset-secondary">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default Hero;
