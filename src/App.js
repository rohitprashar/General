import React, { Component } from 'react';
import { SearchBar } from "./SearchBar";
import unsplash from './api/unsplash';
import ImageList from "./ImageList";
import "./style.css";


class App extends Component {
    state = { images: [] };

    onSearchSubmit = async term => {
      const response = await unsplash.get('/search/photos', {
        params: { query: term }
      });
  
      this.setState({ images: response.data.results });
    };

    render() {

        return (
            <div >
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div class="mycontainer">
                 <div className="row">
                <ImageList images={this.state.images}/>
                </div> 
                </div>
                
            </div>
        )
    }

}

export default App;

