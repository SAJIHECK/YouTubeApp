import React from "react";
import { Header } from "./Header";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";


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
            I Have {this.state.Vedios.length}  
             </div>
          </div>
        );
}
}
export default App;