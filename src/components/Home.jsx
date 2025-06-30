import React from "react";
import HeroImage from "../assets/profilep.webp";
import resume from "../assets/resume.pdf"
import 'animate.css'
const Home = () => {
	return (
		<div
			id="home"
			className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:p-56 space-y-6 md:space-y-0 md:space-x-12"
		>
			{/* Left Text Section */}
			<div className="flex flex-col flex-1 justify-center text-center md:text-left space-y-4">
				<p className="text-lg sm:text-xl md:text-2xl">Hey,</p>
				<p className=" animate__animated animate__zoomInDown animate__slow text-2xl sm:text-3xl md:text-4xl font-bold">
					I'm Sanjaya Khatiwada,
				</p>
				<p className="text-base sm:text-lg md:text-xl">
					Frontend Developer specialized in building modern and responsive web
					applications.
				</p>
				<div className="mt-4 flex justify-center md:justify-start">
					<button
						onClick={() => window.open(resume, "_blank")}
						className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 px-6 py-3 rounded-full hover:scale-105 hover:shadow-lg"
					>
						Resume
					</button>
				</div>
			</div>

			{/* Right Image Section */}
			<div className="flex flex-1 items-center justify-center ">
				<div className=" animate__animated animate__bounceInUp animate__slow border w-72 h-72 bg-zinc-200 border-b-green-700 border-t-red-700 border-l-blue-700 border-r-purple-700 rounded-bl-3xl rounded-ss-full rounded-e-full rounded-br-full">
					<img
						src={HeroImage}
						alt="Sanjaya Khatiwada"
						className="w-64 h-64 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-contain  animate__animated animate__bounceInDown animate__slow"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
