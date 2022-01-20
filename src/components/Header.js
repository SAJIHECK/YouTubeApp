import React from "react";
import '../css/SearchBar.css';

export const Header =()=>{
return (
<div id="headerStyle">
<div className="ui inverted segment">
  <div className="ui inverted secondary pointing menu">
    <a className="active item">
      Home
    </a>
    <a className="item">
      Vedios
    </a>
    <a className="item">
      Photos
    </a>
    <div className="right menu">
    <a className="ui item">
      Logout
    </a>
  </div>
  </div>
</div>
</div>
);
}

