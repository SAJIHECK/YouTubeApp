import React from "react";
import { Header } from "./Header";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VedioList from "./VedioList";

class App extends React.Component{
    state={Vedios: []};
    onSearchSubmit =async term=>{
    const response=await youtube.get('/search',{
        params:{
            q:term
        }
    }); 
this.setState({Vedios:response.data.items});
    };

render(){
    return (
        <div>
            <div>
            <Header/>
            </div>
            <div>
            <SearchBar onData={this.onSearchSubmit} />
           <VedioList vedios={this.state.Vedios} /> 
             </div>
          </div>
        );
}
}
export default App;