import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Blog from'./views/Blog.js';
import ListadoPeliculas from './views/ListadoPeliculas';

function App(){
	return (
		<Router>
			<Routes>
				<Route path="/" element={<ListadoPeliculas/>}/>
				<Route path="/blog" element={<Blog/>}/>
			</Routes>
			{/* Switch fue reemplazado por Routes */}
		</Router>
		// Antes se usaba la funcion componentDidMount y fue reemplazado o es el equivalente a useEffect(), tambien componentDidUpdate()
	);
}

export default App;
