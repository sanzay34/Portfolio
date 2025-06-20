import React from "react";
import HeroImage from "../assets/profile.jpeg";

const Home = () => {
	return (
		<div
			className="  h-screen md:flex flex flex-row text-center p-16 overflow-hidden relative justify-between items-center"
			id="home"
		>
			<div className="w-[50%]">
				{/* Title */}
				<div className="text-xl lg:text-3xl font-bold  animate-fade-in-up p-3">
					<p className="text-left mb-5 ml-10">Hello,</p>
					<p className="text-left mb-5 ml-10">
						I'm Sanjaya Khatiwada
						
					</p>
					
					, Frontend Developer specialized in building modern and responsive web
					applications.
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
			<div>
				{/* Profile Image */}
				<img
					src={HeroImage}
					alt="Sanjaya Khatiwada"
					className="mx-auto mb-8 w-48 h-68 shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
				/>
			</div>
		</div>
	);
};

export default Home;
