import React from "react";

const Navbar = () => {
	return (
		<nav className="bg-black text-white px-8 md:px-16 md:md:py-4 lg:px-24 lg:py-6 md:text-[20px] lg:text-[25px]">
			<div className="container py-2 flex justify-center md:justify-between items-center">
				<div className="space-x-6">
					<a
						href="#home"
						className="hover:text-gray-400 transition duration-150 ease-in-out "
					>
						Home
					</a>
					<a href="#about" className="hover:text-gray-400">
						About Me
					</a>
					<a href="#service" className="hover:text-gray-400">
						Services
					</a>
					<a href="#project" className="hover:text-gray-400">
						Projects
					</a>
					<a href="#contact" className="hover:text-gray-400">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
