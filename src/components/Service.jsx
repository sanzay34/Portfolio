import React from "react";

const services = [
	{
		id: 1,
		title: "Web Design",
		description: "Creating visually appealing and user-friendly web designs.",
	},
	{
		id: 2,
		title: "Frontend Development",
		description: "Building responsive and interactive user interfaces.",
	},
	{
		id: 3,
		title: "Content Writing",
		description: "Writing content for your business and companies.",
	},
];

const Service = () => {
	return (
		<div className=" py-20" id="service">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				{/* Section Title */}
				<h2 className="text-4xl font-bold text-center mb-12 opacity-0 animate-fadeIn">
					My Services
				</h2>

				{/* Service Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={service.id}
							className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 opacity-0 animate-fadeIn"
							style={{
								animationDelay: `${index * 0.2}s`,
								animationFillMode: "forwards",
							}}
						>
							{/* Service Title */}
							<h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
								{service.title}
							</h3>

							{/* Service Description */}
							<p className="mt-2 text-gray-300">{service.description}</p>

							{/* Read More Link */}
							<a
								href="#"
								className="mt-4 inline-block text-green-400 hover:text-blue-500 transition-transform duration-300 transform hover:scale-105"
							>
								Read More →
							</a>
						</div>
					))}
				</div>
			</div>

			{/* CSS for Fade-In Animation */}
			<style>
				{`
					@keyframes fadeIn {
						from { opacity: 0; transform: translateY(20px); }
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

export default Service;
