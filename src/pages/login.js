/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import {auth} from '../config/firebase'
// import PaginaAluno from '../paginaAluno';
import PaginaProfessor from './paginaProfessor'
import Logo from '../assets/logo.png'
// import './login.css'

function Login({onReceiveAluno}) {

    // const [aluno, setAluno] = useState('');

    // useEffect(()=>{
    //     auth.onAuthStateChanged((val)=>{
    //       setAluno({
    //         nome: val.displayName,
    //         email: val.email,
    //         imagem: val.photoURL,
    //         uid: val.uid
    //       });
    //     })
    //   },[])
    
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    
    const signIn = async e => {
        e.preventDefault();
        let result = await auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        if(result){
            onReceiveAluno(result.user);
        }else{
            alert('Error');
        }
    }

    const [professor, setProfessor] = useState('');

    useEffect(()=>{
        auth.onAuthStateChanged((val)=>{
          setProfessor({
            nome: val.displayName,
            email: val.email,
            imagem: val.photoURL,
            uid: val.uid
          });
        })
      },[])
      
    const emailRefProf = useRef(null);
    const passwordRefProf = useRef(null);

    const signInProf = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRefProf.current.value,
            passwordRefProf.current.value
        ).then(userProf => {
            console.log(userProf)
        }).catch(err => {
            console.log(err)
        })
    }

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                <div className={`h-screen justify-center items-center pt-5`}>
                    <div className={`bg-white w-72 p-4 flex-col justify-center items-center rounded-md`}>

                <Link to='/'>
                    <div className={`bg-slate-50 shadow-xl flex-col justify-center items-center rounded-md`}>
                    <img src={Logo} className={`rounded-md w-64 flex-col justify-center items-center`} /> 
                    </div>
                </Link>
                    <hr className={`border-none w-auto h-px mt-5 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-600`}/>
                    <div className={`flex m-5 p-1`}>
                        <div className={`flex text-base font-semibold`}>
                            <div className={`flex m-3 p-2 justify-center items-center`}><Link to='/aluno' >Aluno</Link></div>
                            <div className={`flex m-3 p-2 justify-center items-center`}><Link to='/professor'>Professor</Link></div>
                        </div>
                    </div>
                    </div>
                </div>
                </Route>
                    
                   
    
                 <Route exact path="/professor">
                    {(professor)?(
                        <BrowserRouter>
                        <Switch>
    
                        <Route path="/paginaprofessor">
                            <PaginaProfessor professor={professor} />
                        </Route>
    
                        <Route path="/">
                            <PaginaProfessor professor={professor} />
                        </Route>
    
                        </Switch>
                    </BrowserRouter>
                    ): 
                <div className={`h-screen justify-center items-center pt-3`}>
                    <div className={`rounded-md bg-white w-72 p-4 flex-col justify-center items-center`}>
                        <Link to='/'>
                            <div className={`bg-slate-50 shadow-xl flex-col justify-center items-center rounded-md`}>
                                <img src={Logo} className={`rounded-md w-64 flex-col justify-center items-center`} /> 
                            </div>
                        </Link>
                        <hr className={`border-none w-auto h-px mt-5 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-600`}/>
                        <div className={`flex-col justify-center items-center`}>
                            <p className={`flex justify-center text-base font-semibold mt-2`}>
                                Professor
                            </p>
                            <input className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`}ref={emailRefProf} type="email" placeholder="Email" />
                            <input className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`} ref={passwordRefProf} type="password"placeholder="Senha"/>                     
                            
                            <div className={`flex justify-center`}>
                            <button class={`bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md m-2 h-10 w-24`}onClick={signInProf}>Logar</button>
                            </div>
                            
                            <div className={`flex justify-center text-base font-semibold`}>
                                <div className={`m-2 p-2`}><Link to="/aluno">Login Aluno</Link></div>
                                <div className={`m-2 p-2`}><Link to="/">Inicio</Link></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                       } 
                </Route>

                
                <Route exact path="/aluno">
                    {/* {(aluno)?(
                <BrowserRouter>
                    <Switch>

                    <Route path="/paginaaluno">
                        <PaginaAluno aluno={aluno} />
                    </Route>

                    <Route path="/">
                        <PaginaAluno aluno={aluno} />
                    </Route>

                    </Switch>
                </BrowserRouter>
                    ): */}
                <div className={`h-screen justify-center items-center pt-3`}>
                    <div className={`rounded-md bg-white w-72 p-4 flex-col justify-center items-center`}>
                        <Link to='/'>
                            <div className={`bg-slate-50 shadow-xl flex-col justify-center items-center rounded-md`}>
                                <img src={Logo} className={`rounded-md w-64 flex-col justify-center items-center`} /> 
                            </div>
                        </Link>
                        <hr className={`border-none w-auto h-px mt-5 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-600`}/>
                        <div className={`flex-col justify-center items-center`}>
                            <div className={`flex justify-center text-base font-semibold mt-2`}>Login</div>
                                <input className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`} ref={emailRef} type="email" placeholder="Email" />
                                <input className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`} ref={passwordRef} type="password"placeholder="Senha"/>                     
                                <div className={`flex justify-center`}>
                                <button className={`bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md m-2 h-10 w-24`} onClick={signIn}>Logar</button>
                                </div>
                            <div className={`flex justify-center text-base font-semibold`}>
                                
                                   <div className={`m-2 p-2`}><Link to="/professor">Login Professor</Link></div> 
                                   <div className={`m-2 p-2 `}><Link to="/">Inicio</Link></div> 
                                
                            </div>
                        </div>
                    </div>
                </div>
            
                </Route> 
            </Switch>
</BrowserRouter>
    )
}

export default Login