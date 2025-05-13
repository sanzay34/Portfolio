import React, { useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const form = new FormData();
		form.append("access_key", "be68583c-debd-4d39-8cea-01d016a5b6ed"); // Replace with your Web3Forms Access Key
		form.append("name", formData.name);
		form.append("email", formData.email);
		form.append("message", formData.message);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: form,
		});

		const result = await response.json();
		setLoading(false);

		if (result.success) {
			setSuccessMessage("Your message has been sent successfully!");
			setErrorMessage("");
			setFormData({ name: "", email: "", message: "" }); // Clear form
		} else {
			setErrorMessage("Something went wrong. Please try again.");
			setSuccessMessage("");
		}
	};

	return (
		<div className="bg-black text-white py-20 scroll-mt-20" id="contact">
			<div className="container mx-auto px-8 md:px-16 lg:px-24">
				<h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>

				<div className="flex flex-col md:flex-row items-center md:space-x-12">
					{/* Contact Info Section */}
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

					{/* Contact Form Section */}
					<div className="flex-1 w-full">
						<form onSubmit={handleSubmit} className="space-y-4">
							{successMessage && (
								<p className="text-green-400">{successMessage}</p>
							)}
							{errorMessage && <p className="text-red-500">{errorMessage}</p>}

							<div>
								<label className="block mb-2">Your Name</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									placeholder="Enter Your Name"
									required
								/>
							</div>

							<div>
								<label className="block mb-2">Email</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									placeholder="Enter Your Email"
									required
								/>
							</div>

							<div>
								<label className="block mb-2">Message</label>
								<textarea
									name="message"
									value={formData.message}
									onChange={handleChange}
									className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
									rows="5"
									placeholder="Enter Your Message"
									required
								></textarea>
							</div>

							<button
								type="submit"
								className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-2 rounded-full transition-transform transform hover:scale-105"
								disabled={loading}
							>
								{loading ? "Sending..." : "Send"}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
