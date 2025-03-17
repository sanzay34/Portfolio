import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
	const [hamIcon, setHamIcon] = useState(false);
	return (
		<nav className="bg-green-600 text-white px-8 p-4 sticky top-0 w-full z-50">
			<div className=" flex justify-between  items-center">
				<ul className=" hidden md:flex space-x-6">
					<li>
						<a
							href="#home"
							className="hover:text-gray-400 transition duration-150 ease-in-out "
						>
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="hover:text-gray-400 transition duration-150 ease-in-out "
						>
							About Me
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="hover:text-gray-400 transition duration-150 ease-in-out "
						>
							Services
						</a>
					</li>
					<li>
						<a
							href="#projects"
							className="hover:text-gray-400 transition duration-150 ease-in-out "
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="hover:text-gray-400 transition duration-150 ease-in-out "
						>
							Contact
						</a>
					</li>
				</ul>
				<button
					onClick={() => {
						setHamIcon(!hamIcon);
					}}
					className="md:hidden"
				>
					{hamIcon ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>
			{hamIcon && (
				<div className=" md:hidden flex flex-col ">
					
						
							<a
								href="#home"
								className="hover:text-gray-400 transition duration-150 ease-in-out "
							>
								Home
							</a>
						
						
							<a
								href="#about"
								className="hover:text-gray-400 transition duration-150 ease-in-out "
							>
								About Me
							</a>
						
						
							<a
								href="#services"
								className="hover:text-gray-400 transition duration-150 ease-in-out "
							>
								Services
							</a>
						
						
							<a
								href="#projects"
								className="hover:text-gray-400 transition duration-150 ease-in-out "
							>
								Projects
							</a>
						
							<a
								href="#contact"
								className="hover:text-gray-400 transition duration-150 ease-in-out "
							>
								Contact
							</a>
						
				</div>
			)}
		</nav>
	);
};

export default Navbar;
