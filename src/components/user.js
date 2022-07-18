import React from 'react';

export default function User({id_user, nome, data, objetivo, treino}) {
  return(
    <div>
      <div className={`flex flex-wrap justify-center rounded-xl border-none bg-white p-2 m-2`}>
        <div className="m-4 p-2 w-2/5">Nome: {nome}</div>
        <div className="m-4 p-2 w-1/5">Data: {data}</div>
        <div className="m-4 p-2 w-1/5">Objetivo: {objetivo}</div>
        <div className="m-4 p-2 w-1/5">{treino}</div>
      </div>
      <hr/>
    </div>
  )
}