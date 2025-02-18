import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
	return (
		<div className="bg-black text-white py-20" id="contact">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<motion.h2
					className="text-4xl font-bold text-center mb-12"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
				>
					Contact Me
				</motion.h2>

				<div className="flex flex-col md:flex-row items-center md:space-x-12">
					<motion.div
						className="flex-1"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
					>
						<h3
							className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
              from-green-400 to-blue-500 mb-4"
						>
							Let's Talk
						</h3>
						<p>
							I'm open to discussing web development projects or partnership
							opportunities.
						</p>

						<div className="mb-4 mt-8">
							<FaEnvelope className="inline-block text-green-400 mr-2" />
							<a
								href="mailto:youremail@example.com"
								className="hover:underline"
							>
								sanzay321@gmail.com
							</a>
						</div>
						<div className="mb-4">
							<FaPhone className="inline-block text-green-400 mr-2" />
							<span>+9779860909544</span>
						</div>
						<div className="mb-4">
							<FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
							<span>Manhankal-6, Chabahil, Kathmandu, Nepal</span>
						</div>
					</motion.div>

					<motion.div
						className="flex-1 w-full"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						<form className="space-y-4">
							<div>
								<label htmlFor="name" className="block mb-2">
									Your Name
								</label>
								<input
									type="text"
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									placeholder="Enter Your Name"
								/>
							</div>
							<div>
								<label htmlFor="Email" className="block mb-2">
									Email
								</label>
								<input
									type="text"
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									placeholder="Enter Your Email"
								/>
							</div>
							<div>
								<label htmlFor="message" className="block mb-2">
									Message
								</label>
								<textarea
									type="text"
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									rows="5"
									placeholder="Enter Your Message"
								/>
							</div>

							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden sm:inline md:inline transform transition-transform duration-300 px-8 py-2 rounded-full"
							>
								Send
							</motion.button>
						</form>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
