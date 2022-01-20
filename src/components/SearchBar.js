import React from "react";
import '../css/SearchBar.css';

class SearchBar extends React.Component{
state={term:""};

onFormSubmit=(event)=>{
    event.preventDefault();
    this.props.onData(this.state.term);
};



render(){
    return(
    <div>
    <form onSubmit={this.onFormSubmit} className="ui form">
    <div id="search_bar" className="ui search" >
    <div  className="ui icon input">
    <input 
     id="searchbar"
      className="prompt" 
      type="text" 
      placeholder="Search Vedios..."
      value={this.state.term}
      onChange={(e) => this.setState({term:e.target.value})}
      />
     <i className="search icon"></i>
    </div>
    <div className="results"></div>
    </div>
    </form>
    </div>
        );
}
}
export default SearchBar;