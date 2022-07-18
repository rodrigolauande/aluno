import React from "react";

function Titulo(props) {

    return(
        <div className={`text-center text-3xl my-16`}>
            {props.nome}
        </div>
        
    )
}

export default Titulo