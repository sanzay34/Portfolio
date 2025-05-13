
import About from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Service from "./components/Service";

function App() {
	return (
		<div className="">
			<Navbar />
			<Home />
			<About />
			<Service />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
