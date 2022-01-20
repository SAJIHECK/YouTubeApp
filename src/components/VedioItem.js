import './VedioItems.css';
import React from "react";

const VedioItem=({vedio})=>{
    return (
        <div className="vedio-item item">
            <img className="ui image"  src={vedio.snippet.thumbnails.medium.url}/>
              <div className="content">
                <div className="header">{vedio.snippet.title}</div>
             </div>
        </div>
    );
};

export default VedioItem;