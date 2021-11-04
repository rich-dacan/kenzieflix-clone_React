import React from "react";

export default ({title, items})=>{
    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listaarea">
                {items.results.length > 0 && items.results.map((item,key)=>(
                    <img src="" />
                ))}

            </div>
        </div>
    );
}