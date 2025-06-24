import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="py-8">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
					<div className="flex-1 mb-4 md:mb-0">
						<div className="text-2xl  mb-2">Sanjaya Khatiwada</div>
						<p className="">
							Frontend Developer based in the Nepal, specializing in web and
							software development.
						</p>
					</div>
				</div>

				<div
					className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
				>
					<p className="text-gray-800 hover:text-black">
						&copy; {new Date().getFullYear()} All rights reserved.
					</p>
					<div className="flex space-x-4 my-4 md:my-0">
						<a
							href="https://www.facebook.com/share/1AFecVSLrT/"
							className="text-gray-800 hover:text-black"
						>
							<FaFacebook />
						</a>
						<a
							href="https://www.instagram.com/sanzaykhatiwada/"
							className="text-gray-800 hover:text-black"
						>
							<FaInstagram />
						</a>
						
						
					</div>
					<div className="flex space-x-4">
						<a href="#" className="text-gray-800 hover:text-black">
							Privacy
						</a>
						<a href="#" className="text-gray-800 hover:text-black">
							Terms of Service
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
