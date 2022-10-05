import React from "react";

const gummy = ({precio,id, concentracion, img, title}) => {
    return(
        <div>
            <img src={gummy.img} alt=""/>
            <h1>{gummy.title}</h1>
            {gummy.concentracion} - {gummy.precio}
        </div>
    );
};

export default Gummy