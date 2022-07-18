/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import {auth} from '../config/firebase'


function Header(props) {

    function sair(e){
        e.preventDefault()
        auth.signOut().then(() => {
            alert("Deslogado!");
            window.location.href="/";
        }).catch((error) => {

        });
    }
    return(
        <div className={`h-20 w-screen flex items-center justify-between p-5 bg-gradient-to-r from-blue-500 to-purple-100 text-white`}>
            <div className={`flex`}>
                <img src={Logo} className={`h-16 w-16 rounded-full`} />
            </div>
            <div className={`flex justify-center text-base font-semibold`}>
                <div className={`m-2 p-2`}><Link to='/inicio'>Inicio</Link></div>
                <div className={`m-2 p-2`}><Link to='/dadosTreinoAluno'>Treino</Link></div>
                <div className={`m-2 p-2`} onClick={sair}>sair</div>
                
                <div className='avatar'>
                    <img src={props.user.avatar}/>
                    <label>{props.user.name}</label>
                </div>
            </div>
        </div>
    )
}

export default Header;

// npm install @mui/material @mui/styled-engine-sc styled-components
