import React from "react";

const VedioDetail=({vedio})=>{
    if(!vedio){
        return <div>Loading....</div>
    }
    return (
    <div>
        <div className="ui segment">
        <h4 className="ui header">{vedio.snippet.title}</h4>
        <p>{vedio.snippet.description}</p>
        </div>
    </div>
        );

};
export default VedioDetail;