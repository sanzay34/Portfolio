import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
	const [email, setEmail] = useState("");
	const [emailValid, setEmailValid] = useState(null);
	const [loading, setLoading] = useState(false);

	// Function to validate email using MailboxLayer API
	const validateEmail = async (email) => {
		if (!email) return;
		setLoading(true);

		try {
			const response = await axios.get(
				`https://api.emaillistverify.com/api/verifyEmail?secret=8qEdHKSVUeHYQske9cRAA&email=${email}`
			);

			console.log(response.data); // Debugging

			// EmailListVerify returns a string ("ok", "invalid", "unknown", etc.)
			if (response.data === "ok") {
				setEmailValid(true);
			} else {
				setEmailValid(false);
			}
		} catch (error) {
			console.error("Error validating email:", error);
			setEmailValid(false);
		}

		setLoading(false);
	};

	return (
		<div className="bg-black text-white py-20" id="contact">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

				<div className="flex flex-col md:flex-row items-center md:space-x-12">
					<div className="flex-1">
						<h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
							Let's Talk
						</h3>
						<p>
							I'm open to discussing web development projects or partnership
							opportunities.
						</p>

						<div className="mb-4 mt-8">
							<FaEnvelope className="inline-block text-green-400 mr-2" />
							<a href="mailto:sanzay321@gmail.com" className="hover:underline">
								sanzay321@gmail.com
							</a>
						</div>
						<div className="mb-4">
							<FaPhone className="inline-block text-green-400 mr-2" />
							<span>+9779860909544</span>
						</div>
						<div className="mb-4">
							<FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
							<span>Mahankal-6, Chabahil, Kathmandu, Nepal</span>
						</div>
					</div>

					<div className="flex-1 w-full">
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
								<label htmlFor="email" className="block mb-2">
									Email
								</label>
								<input
									type="text"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
										validateEmail(e.target.value);
									}}
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									placeholder="Enter Your Email"
								/>
								{loading && <p className="text-yellow-400 mt-1">Checking...</p>}
								{emailValid === false && (
									<p className="text-red-500 mt-1">Invalid email address</p>
								)}
								{emailValid === true && (
									<p className="text-green-400 mt-1">Valid email address</p>
								)}
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

							<button className="bg-gradient-to-r from-green-400 to-blue-500 text-white inline md:inline transform transition-transform duration-300 px-8 py-2 rounded-full">
								Send
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
