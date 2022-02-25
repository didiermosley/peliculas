import '../App.css';
import Pelicula from './Pelicula.js'
import PageWrapper from './PageWrapper';
// import PeliculaJson from './peliculas.json';
import Paginacion from './paginacion';
import { useEffect, useState } from 'react';

function ListadoPeliculas() {

	const [paginaActual, setActualPage] = useState(1);
	const total_page = 4
	const [peliculas, setPeliculas] = useState([]);
	// let peliculas = PeliculaJson;

	useEffect(()=>{
		buscarPelicula();
	},[]);

	const buscarPelicula = async ()=>{
		// Primero hay que entrar a https://cors-anywhere.herokuapp.com/corsdemo y pedir un acceso temporal al servidor y luego funcionara.
		let url= 'https://cors-anywhere.herokuapp.com/https://lucasmoy.dev/data/react/peliculas.json';

		let resp = await fetch(url, {
			"method":'GET',
			//"mode":'no-cors',
			"headers": {
				"Accept": 'application/json',
				"Content-type":'application/json',
				 "Origin":'https://lucasmoy.dev/'
			}
		});
		let json = await resp.json();
		setPeliculas(json);
		//alert(json1)
	}

	
	const getTotalPages = ()=>{
		let cantTotal = peliculas.length;
		return Math.ceil(cantTotal/total_page);
	}

	let peliculapPage = peliculas.slice(
		(paginaActual - 1) * total_page, 
		paginaActual * total_page
	);

	// Si llamamos a una funcion que se guarde en una variable ConstantSourceNode, es importante llamarlo despues de ser creada a diferencia con function , sí se podría llamar incluso en lineas anteriores de donde se define la function.

	return (
		<PageWrapper>


			<Paginacion pagina={paginaActual} total={getTotalPages()} onChange={(pagina)=>{
				setActualPage(pagina);
				// pagina es el valor que viene del ciclo for con el i+1
			}}/>
			

			{peliculapPage.map(pelicula =>
				<Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director} starts={pelicula.starts} img={pelicula.img}>{pelicula.descripcion}</Pelicula>
				)}

			{/* Dentro de la funcion del map cuando se ponen llaves hay que especificar el return, pero en este caso, cuando no ponemos llaves no es necesario el return. */}

			<h1>Hola</h1>
		</PageWrapper>
	);
}

export default ListadoPeliculas;
