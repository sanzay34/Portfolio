import React from "react";
import { motion } from "framer-motion";
import HeroImage from "../assets/profile.jpeg";

const Hero = () => {
	return (
		<div className="bg-black text-white text-center py-16 overflow-hidden">
			{/* Profile Image */}
			<motion.img
				src={HeroImage}
				alt="Sanjaya Khatiwada"
				className="mx-auto mb-8 w-48 h-48 rounded-full object-cover shadow-lg"
				initial={{ opacity: 0, y: -50, scale: 0.8 }}
				animate={{ opacity: 1, y: 0, scale: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				whileHover={{ scale: 1.15, rotate: 5 }}
			/>

			{/* Title */}
			<motion.h1
				className="text-4xl font-bold"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
			>
				I'm{" "}
				<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
					Sanjaya Khatiwada
				</span>
				, Frontend Developer
			</motion.h1>

			{/* Subtitle */}
			<motion.p
				className="mt-4 text-lg text-gray-300"
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
			>
				I specialize in building modern and responsive web applications.
			</motion.p>

			{/* Buttons */}
			<div className="mt-8 space-x-4">
				<motion.button
					whileHover={{
						scale: 1.1,
						background: "linear-gradient(to right, #32CD32, #1E90FF)",
						boxShadow: "0px 0px 12px #32CD32",
					}}
					whileTap={{ scale: 0.95 }}
					className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full"
				>
					Contact With Me
				</motion.button>

				<motion.button
					whileHover={{
						scale: 1.1,
						background: "linear-gradient(to right, #FF69B4, #FFD700)",
						boxShadow: "0px 0px 12px #FF69B4",
					}}
					whileTap={{ scale: 0.95 }}
					className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 px-4 py-2 rounded-full"
				>
					Resume
				</motion.button>
			</div>

			{/* Background Glow Effect */}
			<motion.div
				className="absolute inset-0 z-[-1]"
				initial={{ opacity: 0 }}
				animate={{
					opacity: 0.4,
					background:
						"radial-gradient(circle, rgba(32,178,170,0.4) 0%, rgba(0,0,0,0) 60%)",
				}}
				transition={{ duration: 1.5, delay: 1 }}
			/>
		</div>
	);
};

export default Hero;
