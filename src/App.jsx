import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';

import './App.scss';

function App() {
	return (
		<div className="App">
			<div className="AppBody">
				<BrowserRouter>
					<Routes>
						<Route path="/about" element={<About />} />
						<Route path="/contact" element={<Contact />} />
						{/* <Route path="/documentacion" element={<Documentacion />} /> */}
						<Route path="/" element={<Home />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
