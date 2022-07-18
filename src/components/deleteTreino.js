import { useState } from "react";
import { ref } from './dadosTreino';
import EditarTreino from './editarTreino';
import Container from "./container";
import { IconeEdicao, Lixo } from "./icones";

function DeleteTreino({dev}) {

    const [editbox, seteditbox] = useState(false)

    function deleteDoc(docx) {
        // console.log(dev)
        ref.doc(docx.id).delete()
        // .catch((err) =>{
        //     alert(err)
        //     console.error(err);
        // })
    }
    return(
        <Container>

        <div className={`flex-col`} key={dev.id}>
            <div className="`flex flex-wrap justify-center bg-slate-200 rounded-xl border-none">
                
            <div className={`flex flex-wrap justify-around rounded-xl border-none`}>
            <div className="m-4 p-2 w-3/3 ">
                <h1>Nome: {dev.nome}</h1>
            </div>
            <div className="m-4 p-2 w-3/3">
                <p>Data: {dev.data}</p>
            </div>
            <div className="m-4 p-2 w-3/3">
                <p>Objetivo: {dev.objetivo}</p>
            </div>
            <div className="m-4 p-4 w-2/3">
                <p>{dev.treino}</p>
            </div>
            </div>
            
            <div className={`flex-col` }>
                <div className="flex justify-center">
                <button className={`flex justify-center items-center text-red-600 rounded-full hover:bg-purple-50 p-2 m-1`} 
                onClick={() => deleteDoc(dev)}>{Lixo}</button>
                <button className={`flex justify-center items-center text-cyan-800 rounded-full hover:bg-purple-50 p-2 m-1`}
                 onClick={() => seteditbox(true)}>{IconeEdicao}</button>
                </div>
                <div>
                {editbox === true && <EditarTreino dev={dev} seteditbox={seteditbox} />}
                </div>
            </div>
                                  

            <hr className={`border-none w-auto h-px mt-5 bg-gradient-to-r from-stone-600 via-stone-300 to-stone-600`}/>

                 </div>
        </div>
        </Container>
    )
}

export default DeleteTreino