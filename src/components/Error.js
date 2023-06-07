import { useRouteError } from "react-router-dom"
const Error = () => {
    console.log(useRouteError())
    return(
        <div className='row-cols-1 row-cols-md-2  container'>
            <h2>Oooops!<br/> {useRouteError().data}</h2>
            <div className="className='row-cols-1">
            <img src="https://media1.giphy.com/media/OmK8lulOMQ9XO/giphy.gif?cid=ecf05e470gso5ws274jl1o4x4hpx1kz16m0mmvvweg3yvgar&ep=v1_gifs_search&rid=giphy.gif&ct=g"/>
            
            <a href="http://localhost:1234/home"> Get back on track !</a>
            </div>
        </div>
    )
    
}

export default Error

