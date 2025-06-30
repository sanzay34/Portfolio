import React from "react";
import AboutImage from "../assets/profile.jpeg";

const About = () => {
	return (
		<div className=" py-20" id="about">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
				<div className="flex flex-col md:flex-row items-center md:space-x-12">
					<div className="flex-1">
						<p className="text-lg mb-8 animate__animated animate__fadeInDown">
							Hi! I’m Sanjaya Khatiwada, a passionate Frontend Developer
							specializing in crafting modern, responsive, and user-friendly
							websites. I focus on delivering seamless, mobile-first design and
							interactive interfaces that adapt beautifully across all screen
							sizes. My goal is to transform ideas into clean, elegant, and
							highly performant web experiences.
						</p>
						<div className="space-y-4 animate__animated animate__fadeInDown  animate__slow">
							<div className="flex items-center">
								<label htmlFor="html" className="w-2/12">
									HTML5
								</label>

								<div className="grow bg-gray-800 rounded-full h-2.5">
									<div
										className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
									></div>
								</div>
							</div>
							<div className="flex items-center">
								<label htmlFor="css" className="w-2/12">
									CSS3
								</label>
								<div className="grow bg-gray-800 rounded-full h-2.5">
									<div
										className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
									></div>
								</div>
							</div>
							<div className="flex items-center">
								<label htmlFor="javascript" className="w-3/12 sm:w-2/12">
									JAVASCRIPT
								</label>
								<div className="grow bg-gray-800 rounded-full h-2.5">
									<div
										className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
									></div>
								</div>
							</div>
							<div className="flex items-center">
								<label htmlFor="reactjs" className="w-2/12">
									React JS
								</label>
								<div className="grow bg-gray-800 rounded-full h-2.5">
									<div
										className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
									></div>
								</div>
							</div>
						</div>
						<div className="mt-12 flex justify-around text-center">
							<div>
								<h3
									className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
								>
									1+
								</h3>
								<p>Years Experience</p>
							</div>
							<div>
								<h3
									className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
								>
									2+
								</h3>
								<p>Projects Completed</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
