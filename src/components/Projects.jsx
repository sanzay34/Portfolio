import React from "react";
import { motion } from "framer-motion";
import todoImage from "../assets/image1.png";
import personalityImage from "../assets/image.png";

const projects = [
	{
		id: 1,
		name: "Todo App",
		technologies: "React Vite",
		image: todoImage,
		github: "https://github.com/YouafKhan1",
	},
	{
		id: 2,
		name: "Personality Prediction",
		technologies: "React",
		image: personalityImage,
		github: "https://github.com/YouafKhan1",
	},
	
];

const Projects = () => {
	return (
		<div className="bg-black text-white py-20" id="project">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				{/* Section Title */}
				<motion.h2
					className="text-4xl font-bold text-center mb-12"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					My Projects
				</motion.h2>

				{/* Project Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<motion.div
							key={project.id}
							className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transform transition-transform duration-300"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: index * 0.2,
								ease: "easeOut",
							}}
							whileHover={{
								scale: 1.05,
								boxShadow: "0px 8px 32px rgba(0, 255, 128, 0.6)",
							}}
						>
							{/* Project Image */}
							<motion.img
								src={project.image}
								alt={project.name}
								className="rounded-lg mb-4 w-full h-48 object-cover"
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.5 }}
							/>

							{/* Project Title */}
							<h3 className="text-2xl font-bold mb-2">{project.name}</h3>

							{/* Project Technologies */}
							<p className="text-gray-400 mb-4">{project.technologies}</p>

							{/* GitHub Link */}
							<motion.a
								href={project.github}
								className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
								target="_blank"
								rel="noopener noreferrer"
								whileHover={{
									scale: 1.1,
									boxShadow: "0 0 20px rgba(0, 255, 128, 0.8)",
								}}
								whileTap={{ scale: 0.9 }}
							>
								GitHub
							</motion.a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
