import { useState } from "react";
import { ref } from './dadosTreino';
import {v4 as uuidv4 } from 'uuid';
import './createTreino.css'
import Container from "./container";
import Titulo from "./titulo";
import { Cancelar, Salvar } from "./icones";

function CreateTreino() {

    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [treino, setTreino] = useState('')

    function createDoc(newDataObj){
        console.log("**")
        ref
        // .doc() usuario de auto id no firestore
        .doc(newDataObj.id)
        .set(newDataObj).catch((err) =>{
            alert(err)
            console.error(err);
        })
    }

    return(
        <Container>
        <Titulo nome='Montar Treino'/>
        <div className={`flex flex-wrap justify-center bg-slate-200 rounded-xl border-none`}>
            <div className="m-4 p-4 w-3/3">
                <label className={`w-60 h-6 p-1 m-2`}>Nome</label>
                <input type='text' id='nome1' 
                    placeholder="nome" 
                    onChange={(e) => setNome(e.target.value)}
                    className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`}/>
            </div>

            <div className={`m-4 p-4 w-3/3`}>
                <label className={`w-60 h-6 p-1 m-2`}>Data</label>
                <input type="date" id='data1' 
                    placeholder="data" 
                    onChange={(e) => setData(e.target.value)}
                    className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`}/>
            </div>
            
            <div className={`m-4 p-4 w-3/3`}>
                <label className={`w-60 h-6 p-1 m-2`}>Objetivo</label>
                <input type='text' id='objetivo1' 
                    placeholder="objetivo" 
                    onChange={(e) => setObjetivo(e.target.value)}
                    className={`w-60 h-6 p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`}/>
            </div>

            <div className={`m-4 p-4`}>
                {/* <label className={`w-60 h-6 p-1 m-2`}>Descricao</label> */}
                <textarea  type='text' id='treino1' 
                    placeholder="treino..." 
                    onChange={(e) => setTreino(e.target.value)}
                    className={`w-96 h-screen p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`}/>
                </div>
            </div>

            <hr className={`border-none w-auto h-px mt-5 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-600`}/>

            <div className={`flex justify-center`}>

                <button className={`flex justify-center items-center text-green-700 rounded-full hover:bg-purple-50 p-2 m-1`}
                    onClick={() => {
                        createDoc({nome,data,objetivo,treino,id: uuidv4()})
                        // createDoc({nome,data,objetivo,treino})
                        document.getElementById('nome1').value = ''
                        document.getElementById('data1').value = ''
                        document.getElementById('objetivo1').value = ''
                        document.getElementById('treino1').value = ''
                    }}>{Salvar}</button>

                <button className={`flex justify-center items-center text-red-700 rounded-full hover:bg-purple-50 p-2 m-1`}>
                    {Cancelar}
                </button>
            </div>
             
        </Container>
    )
}

export default CreateTreino