/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {auth} from '../config/firebase';
import {BrowserRouter, Link} from 'react-router-dom';
// import './paginaProfessor.css'
import Logo from '../assets/logo.png'
import Routes from "../config/Routes";

function paginaProfessor() {

    function sair(e){
        e.preventDefault()
        auth.signOut().then(() => {
            alert("Deslogado!");
            window.location.href="/";
        }).catch((error) => {

        });
    }

    return(
        <BrowserRouter>
        <div className={`h-20 w-screen flex items-center justify-between p-5 bg-gradient-to-r from-blue-500 to-purple-100 text-white`}>
            <div className='flex'>
                <img className={`h-16 w-16 rounded-full`} src={Logo}/>
            </div>        
            <div className={`flex justify-center text-base font-semibold`}>
                <div className={`m-2 p-2`}><Link to='/inicio'>Inicio</Link></div>
                <div className={`m-2 p-2`}><Link to='/dadosTreino'>Criar Treino</Link></div>
                <div className={`m-2 p-2`} onClick={sair}>sair</div>
            </div>
        </div>
        <Routes/>

        <div className={`bg-gradient-to-r from-blue-500 to-purple-100 flex justify-center items-center text-white fixed p-5 h-10 w-screen text-lg bottom-0 `}>
            Todos os direitos reservados
        </div>
        
        </BrowserRouter>
    )
}

export default paginaProfessor