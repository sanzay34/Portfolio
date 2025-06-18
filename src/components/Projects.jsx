import React from "react";
import todoImage from "../assets/image1.png";
import personalityImage from "../assets/image.png";

const projects = [
	{
		id: 1,
		name: "Todo App",
		technologies: "React Vite",
		image: todoImage,
		vercel:
			"https://todolist-9rg5ypiq1-sanjaya-khatiwadas-projects.vercel.app/",
	},
	{
		id: 2,
		name: "Personality Prediction",
		technologies: "React",
		image: personalityImage,
		netlify: "https://personalityprediction.netlify.app/",
	},
	{
		id: 3,
		name: "Ecommerce Website",
		technologies: "React",
		image: personalityImage,
		netlify: "https://ktmfashioncollection.netlify.app/",
	},
];

const Projects = () => {
	return (
		<div className="bg-black text-white py-20" id="project">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				{/* Section Title */}
				<h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

				{/* Project Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<div
							key={project.id}
							className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 opacity-0 animate-fadeIn"
							style={{
								animationDelay: `${index * 0.3}s`,
								animationFillMode: "forwards",
							}}
						>
							{/* Project Image */}
							<img
								src={project.image}
								alt={project.name}
								className="rounded-lg mb-4 w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
							/>

							{/* Project Title */}
							<h3 className="text-2xl font-bold mb-2">{project.name}</h3>

							{/* Project Technologies */}
							<p className="text-gray-400 mb-4">{project.technologies}</p>

							{/* GitHub Link */}
							<a
								href={project.github}
								className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-110 hover:shadow-lg"
								target="_blank"
								rel="noopener noreferrer"
							>
								Deploy
							</a>
						</div>
					))}
				</div>
			</div>

			{/* CSS for fade-in animation */}
			<style>
				{`
					@keyframes fadeIn {
						from { opacity: 0; transform: translateY(30px); }
						to { opacity: 1; transform: translateY(0); }
					}
					.animate-fadeIn {
						animation: fadeIn 0.8s ease-out forwards;
					}
				`}
			</style>
		</div>
	);
};

export default Projects;
