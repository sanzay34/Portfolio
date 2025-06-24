import React from "react";
import HeroImage from "../assets/profilep.webp";
import resume from "../assets/resume.pdf"
const Home = () => {
	return (
		<div
			id="home"
			className="min-h-screen flex flex-col md:flex-row justify-center items-center p-4 md:p-16 space-y-6 md:space-y-0 md:space-x-12"
		>
			{/* Left Text Section */}
			<div className="flex flex-col flex-1 justify-center text-center md:text-left space-y-4">
				<p className="text-lg sm:text-xl md:text-2xl">Hey,</p>
				<p className="text-2xl sm:text-3xl md:text-4xl font-bold">
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
			<div className="flex flex-1 items-center justify-center">
				<img
					src={HeroImage}
					alt="Sanjaya Khatiwada"
					className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-contain"
				/>
			</div>
		</div>
	);
};

export default Home;
