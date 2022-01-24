import '../css/VedioItems.css';
import React from "react";

const VedioItem=({vedio,onVedioSelect})=>{
    return (
        <div onClick={()=>onVedioSelect(vedio)} className="vedio-item item">
            <img alt={vedio.snippet.title} className="ui image"  src={vedio.snippet.thumbnails.medium.url}/>
              <div className="content">
                <div className="header">{vedio.snippet.title}</div>
             </div>
        </div>
    );
};

export default VedioItem;