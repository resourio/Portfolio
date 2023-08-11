import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
// import Title from './Title';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
