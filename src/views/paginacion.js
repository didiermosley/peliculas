export default function Paginacion(props){

    const getPaginas = ()=>{
        const resultado = [];
        for(let i=0;i<props.total;i++){
            let page = i+1;
            resultado.push(
            <a onClick={()=> props.onChange(page)} 
            className={props.pagina === page ? "active": ''}
            href="#">{page}</a>
            );
        }
        return resultado;
    }

    return (
        <div className="topbar-filter">
            
            {/* Otra forma de hacerlo */}
            {/* {Array.apply(0, Array(props.total)).map( value =>
                <a className="active" href="#">1</a>
            )} */}
            <div className="pagination2">
                <span>Page {props.pagina} of {props.total}:</span>
                {getPaginas()}
            </div>
        </div>
        // React Fragment <></>
    );
}