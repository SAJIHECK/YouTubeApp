import React from "react";
import VedioItem from "./VedioItem";

const VedioList=({vedios}) =>{

    const renderList=vedios.map((vedio)=>{
    return < VedioItem vedio={vedio} />
    });


  return <div className="ui relaxed divided list">{renderList}</div>  
};

export default VedioList; 