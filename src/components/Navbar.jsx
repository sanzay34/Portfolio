import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link,NavLink} from "react-router-dom"
const Navbar = () => {
	const [hamIcon, setHamIcon] = useState(false);
	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About Me" },
		{ href: "#service", label: "Services" },
		{ href: "#project", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];
	return (
		<nav className="bg-blue-100 text-black font-bold px-8 p-4 sticky top-0 w-full z-50 shadow-md">
			<div className=" flex justify-between  items-center">
				<ul className="hidden md:flex space-x-6">
					{navLinks.map((link) => (
						<li key={link.href}>
							<a
								href={link.href}
								className="hover:text-gray-400 transition duration-150 ease-in-out"
							>
								{link.label}
							</a>
							<hr className="w-2/4 border-none h-[2px] bg-gray-600 hidden"></hr>
						</li>
					))}
				</ul>

				<button
					onClick={() => setHamIcon(!hamIcon)}
					className="md:hidden"
					aria-label={hamIcon ? "Close menu" : "Open menu"}
				>
					{hamIcon ? <FaTimes size={24} /> : <FaBars size={24} />}
				</button>
			</div>
			{hamIcon && (
				<div className="md:hidden flex flex-col space-y-2 mt-2">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setHamIcon(false)}
							className="hover:text-gray-400 transition duration-150 ease-in-out"
						>
							{link.label}
						</a>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
