import React from "react";
import { motion } from "framer-motion";

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
		<div className="bg-black text-white py-20" id="service">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				{/* Section Title */}
				<motion.h2
					className="text-4xl font-bold text-center mb-12"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					My Services
				</motion.h2>

				{/* Service Cards */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							
							className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
							initial={{ opacity: 0, y: 50 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.8,
								delay: index * 0.2,
								ease: "easeOut",
							}}
							whileHover={{
								scale: 1.1,
								boxShadow: "0px 8px 32px rgba(0, 255, 128, 0.6)",
							}}
						>
							{/* Service ID */}
							
							{/* Service Title */}
							<h3
								className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
							>
								{service.title}
							</h3>

							{/* Service Description */}
							<p className="mt-2 text-gray-300">{service.description}</p>

							{/* Read More Link */}
							<motion.a
								href="#"
								className="mt-4 inline-block text-green-400 hover:text-blue-500"
								whileHover={{
									scale: 1.1,
									color: "#38BDF8",
								}}
								whileTap={{ scale: 0.95 }}
							>
								Read More →
							</motion.a>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;
