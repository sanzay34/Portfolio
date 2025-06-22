import React from "react";
import HeroImage from "../assets/profilep.webp";

const Home = () => {
	return (
		<div
			className="flex flex-row text-center md:p-16 p-4 overflow-hidden relative justify-between items-center"
			id="home"
		>
			<div className=" w-[40%]">
				{/* Title */}
				<div className="text-xl lg:text-3xl animate-fade-in-up p-3">
					<p className="sm:text-left sm:mb-5 sm:ml-10">Hey,</p>
					<p className="sm:text-left sm:mb-5 sm:ml-10 font-bold">
						I'm Sanjaya Khatiwada,
					</p>
					<p className="sm:text-left sm:mb-5 sm:ml-10">
						Frontend Developer specialized in building modern and responsive web
						applications.
					</p>
				</div>

				<div className="flex items-center justify-center gap-3 mt-3">
					{/* Buttons */}
					<div>
						<a href="#contact" className="mt-8 space-x-4">
							<button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg">
								Contact With Me
							</button>
						</a>
					</div>

					<div>
						<button className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full hover:scale-110 hover:shadow-lg">
							Resume
						</button>
					</div>
				</div>
			</div>
			<div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
				{/* Profile Image */}
				<img
					src={HeroImage}
					alt="Sanjaya Khatiwada"
					className="w-60 h-60 rounded-full object-contain"
				/>
			</div>
		</div>
	);
};

export default Home;
