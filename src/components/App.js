import React from "react";
import { Header } from "./Header";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VedioList from "./VedioList";
import VedioDetail from "./VedioDetail";

class App extends React.Component{
    state={Vedios: [],selectedVedio:null};
    onSearchSubmit =async term=>{
    const response=await youtube.get('/search',{
        params:{
            q:term
        }
    }); 
        this.setState({Vedios:response.data.items});
    };

    onVedioSelect=vedio=>{
       this.setState({selectedVedio:vedio});
    };


render(){
    return (
        <div>
            <div>
            <Header/>
            </div>
            <div>
            <SearchBar onData={this.onSearchSubmit} />
            <VedioDetail vedio={this.state.selectedVedio}/>
           <VedioList onVedioSelect={this.onVedioSelect} vedios={this.state.Vedios} /> 
             </div>
          </div>
        );
}
}
export default App;