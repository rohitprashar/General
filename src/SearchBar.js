import React, { Component } from 'react';

export class SearchBar extends Component {
    state = { term: '' }


    onFormSubmit=(event)=>{
        // this will prevent the entire page from submitting
    event.preventDefault(); 
     this.props.onSearchSubmit(this.state.term)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit}>
                <label>Enter Your Search</label>
                <input type="text"
                    className="form-control"
                    name="input"
                    value={this.state.term}
                    onChange={(event) => { this.setState({ term: event.target.value }) }}
                ></input>
                </form>
               
            </div>
        );
    }
}
