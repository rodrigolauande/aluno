// import React from "react";
// import {auth} from '../firebase';
// import {BrowserRouter, Link} from 'react-router-dom';
// import './paginaAluno.css'
// import Logo from '../assets/logo.png'
// import Routes from "./Routes";

// function PaginaAluno() {

//     function sair(e){
//         e.preventDefault()
//         auth.signOut().then(() => {
//             alert("Deslogado!");
//             window.location.href="/";
//         }).catch((error) => {

//         });
//     }

//     return(
//         <BrowserRouter>
        
//         <div className='header_aluno'>
//             <div className='header_logo'>
//                 <img className="imagem_logo" src={Logo}/>
//             </div>
//             <div className="nav_login">
//                 <ul>
//                     <li><Link to='/inicio'>Inicio</Link></li>
//                     <li><Link to='/treino'>Treino</Link></li>
//                     <li><a onClick={sair}>sair</a></li>
//                 </ul>
//             </div>
//         </div>

//         <h1>Logado com Aluno</h1>
//         <Routes/>

//         <div className="footer">
//             Todos os direitos reservados
//         </div>
        
//         </BrowserRouter>
//     )
// }

// export default PaginaAluno