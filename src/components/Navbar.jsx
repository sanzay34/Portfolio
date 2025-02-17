import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
	const linkVariants = {
		hover: {
			scale: 1.1,
			color: "#9CA3AF", // gray-400
			transition: { type: "spring", stiffness: 300 },
		},
	};

	return (
		<motion.nav
			initial={{ y: -50, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.8, ease: "easeOut" }}
			className="bg-black text-white px-8 md:px-16 lg:px-24 py-4 md:py-6 md:text-[20px] lg:text-[25px] shadow-lg"
		>
			<div className="container py-2 flex justify-center md:justify-between items-center">
				<motion.div
					className="space-x-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8 }}
				>
					{["Home", "About Me", "Services", "Projects", "Contact"].map(
						(item, index) => (
							<motion.a
								key={item}
								href={`#${item.toLowerCase().replace(" ", "")}`}
								variants={linkVariants}
								whileHover="hover"
								className="transition duration-150 ease-in-out"
							>
								{item}
							</motion.a>
						)
					)}
				</motion.div>
			</div>
		</motion.nav>
	);
};

export default Navbar;
