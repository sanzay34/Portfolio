
import About from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


function App() {
	return (
		<div className="bg-slate-100">
			<Navbar />
			<Home />
			<About />
			
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
