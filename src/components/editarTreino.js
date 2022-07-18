import { useState } from "react";
import { ref } from './dadosTreino'
import Titulo from "./titulo";

function EditarTreino({dev,seteditbox}) {

    const [nome, setNome] = useState('')
    const [data, setData] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [treino, setTreino] = useState('')

    function editDoc(updatedoc){
        ref
        .doc(updatedoc.id)
        .update(updatedoc)
        .catch((err) =>{
            alert(err)
            console.error(err);
        })
    }

        return(
        <div>

            <div className={`flex-col justify-center bg-slate-200 rounded-xl border-none`}>
                <Titulo nome="Editar o Treino"/>
                    <div className={'flex flex-wrap justify-center bg-slate-200 rounded-xl border-none'}>
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
                                <textarea type='text' id='treino1' 
                                placeholder="nome" 
                                onChange={(e) => setTreino(e.target.value)}
                                className={`w-96 h-screen p-1 m-2 hover:bg-purple-100 border border-purple-500 rounded-lg`}/>
                         </div> 
                    </div>
        </div>
        <div className={`flex-col justify-center bg-white p-1`}>


                    <hr className={`border-none w-auto h-px mt-5 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-600`}/>

                        <div className={`flex justify-center`}>
                        <button className={`bg-gradient-to-r from-green-800 to-green-500 text-white rounded-md m-2 h-10 w-24`}
                        onClick={() => {
                            editDoc({nome: nome, data: data, objetivo: objetivo, treino: treino, id: dev.id})
                            seteditbox(false)                                
                        }}>Atualizar</button>
                        </div>
                    </div>
        </div>
                        
                        
    )
}

export default EditarTreino