import React from "react";
import HeroImage from "../assets/profile.jpeg";

const Home = () => {
	return (
		<div className="bg-black text-white text-center py-16 overflow-hidden md:flex-col relative" id="home">
			<div>
				{/* Profile Image */}
				<img
					src={HeroImage}
					alt="Sanjaya Khatiwada"
					className="mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg transform transition-transform duration-300 hover:scale-110 hover:rotate-3"
				/>
			</div>
			<div>
				{/* Title */}
				<h1 className="text-4xl sm:text-xl font-bold opacity-20 animate-fade-in-up">
					I'm{" "}
					<span className=" bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
						Sanjaya Khatiwada
					</span>
					, Frontend Developer
				</h1>

				{/* Subtitle */}
				<p className="mt-4 text-lg text-gray-300 sm:text-md">
					I specialize in building modern and responsive web applications.
				</p>

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

			{/* Background Glow Effect */}
			<div
				className="absolute inset-0 z-[-1] opacity-0 animate-fade-in delay-500"
				style={{
					background:
						"radial-gradient(circle, rgba(32,178,170,0.4) 0%, rgba(0,0,0,0) 60%)",
				}}
			/>
		</div>
	);
};

export default Home;
