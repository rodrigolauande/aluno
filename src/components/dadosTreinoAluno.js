import { useState, useEffect } from 'react';
import {firestore} from '../config/firebase';
import Container from './container';
import Titulo from './titulo';
import User from './user';

const ref = firestore.collection('usuarios')

function DadosTreinoAluno() {

  // const [ user, setUser] = useState({})
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState("")

  const [data, setdata] = useState([])
  const [loader, setloader] = useState(true)

  function getData() {                             
    ref.onSnapshot((querySnapshot) => {
      const items = []
      querySnapshot.forEach((doc) => {
        items.push(doc.data())
      })
      setdata(items)
      setloader(false)
    })
  }

  useEffect(() => {
    getData()
  }, [])
  useEffect( () => {
    setFilter(
      Object.values(data).filter((name) => 
        name.nome.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, data])
  console.log(search)


  return (
      <Container>
        <Titulo nome='Dados Treino'/>
        <div className="flex-col justify-center items-center bg-slate-200 rounded-xl border-none">

        <div className="flex justify-center p-2" >
            <input className={`w-80 p-2`}type='search' placeholder='Pesquisar' onChange={(e) => setSearch(e.target.value)}/>
        </div> 

          {/* {loader === false && (data.map((dev) => (
            <div className={`flex-col`} key={dev.id}>           
            <div className={`flex flex-wrap justify-between bg-slate-200 rounded-xl border-none`}>
            <div className="m-2 p-2">
            <h1>Nome: {dev.nome}</h1>
            </div>
            <div className="m-2 p-2">
                <p>Data: {dev.data}</p>
                </div>
            <div className="m-2 p-2">
            <p>Objetivo: {dev.objetivo}</p>
                </div>
                <div className='justify-center w-full flex'>
                
                <div className="m-2 p-2">
                <p>{dev.treino}</p>
                </div>
                </div>
                </div>
                </div>
          )))} */}
          
        {
          Object.values(data).length > 0 ?(
            filter.length <= 0 ?(
              <span>usuario nao encontrado</span>
              ):(
                filter.map((users) => {
                  return(
                    <User
                   nome = {users.nome}
                   data = {users.data}
                   objetivo = {users.objetivo}
                   treino = {users.treino}
                   />
                )
              })
              )
              ):(
                null
                )
              }
              
              </div>
      </Container>
  );
}

export {ref}
export default DadosTreinoAluno;


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }

// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document} /{kv3GnxU5yui0yrm8SfqJ} {
//       allow read: if request.auth.token.email == "guigo0502@hotmail.com";
//       allow read: if request.auth.token.email == "a@aluno.com.br";
//       allow read: if request.auth.token.email == "a@professor.com.br";
//       allow write: if true;
//     }
//     match /{document} /{Uf2X8zMXYRMaFn9w30wj} {
//       allow read: if request.auth.token.email == "gui@gui.com.br";
//       allow read: if request.auth.token.email == "a@professor.com.br";
//       allow write: if true;
//     }
//   }
// }