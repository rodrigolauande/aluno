import React from "react";

function Container(props) {

    return(
        <main className={`bg-white shadow-xl p-1 mx-2 mb-4 rounded-xl border-none`}>
            <div>
                {props.children}
            </div>
        </main>
        
    )
}

export default Container