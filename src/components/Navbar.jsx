import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
	const [hamIcon, setHamIcon] = useState(false);
	const location = useLocation();

	const navLinks = [
		{ href: "#home", label: "Home" },
		{ href: "#about", label: "About Me" },
		{ href: "#project", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<nav className="bg-blue-100 text-gray-400 font-bold px-8 p-4 sticky top-0 w-full z-50 shadow-md">
			<div className="flex items-center justify-between">
				<ul className="hidden md:flex md:flex-1 space-x-6">
					{navLinks.map((link) => {
						const isActive = location.hash === link.href;

						return (
							<li key={link.href} className="relative group">
								<a
									href={link.href}
									className={`transition duration-150 ease-in-out ${
										isActive ? "text-black" : "hover:text-black"
									}`}
								>
									{link.label}
								</a>
								<span
									className={`absolute left-2 bottom-[-4px] h-[2px] rounded transition-all duration-300
                    ${
											isActive
												? "w-2/3 bg-black "
												: "w-0 group-hover:w-2/3 group-hover:bg-black"
										}`}
								/>
							</li>
						);
					})}
				</ul>

				<button
					onClick={() => setHamIcon(!hamIcon)}
					className="md:hidden"
					aria-label={hamIcon ? "Close menu" : "Open menu"}
				>
					{hamIcon ? <FaTimes size={24} color="black" /> : <FaBars size={24} color="black" />}
				</button>
			</div>

			{hamIcon && (
				<div className="md:hidden flex flex-col space-y-4 mt-4 absolute left-4 top-16 bg-blue-100 p-4 rounded-lg shadow">
					{navLinks.map((link) => (
						<a
							key={link.href}
							href={link.href}
							onClick={() => setHamIcon(false)}
							className={`transition duration-150 ease-in-out ${
								location.hash === link.href
									? "text-black"
									: "hover:black"
							}`}
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
