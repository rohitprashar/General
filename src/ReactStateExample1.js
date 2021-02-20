const { Component } = require("react");

import React, { Component } from 'react';


class ReacrStateExample1 extends Component {

    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(position => {
            this.setState({ lat: position })
        },
            error => {
                this.setState({ errorMessage: 'Sorry You have No Permisiion to see the location' })
            })
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return (<div><Season lat={this.state.errorMessage} /></div>)
        }
        if (this.state.lat) {
            return (<div><Season lat={this.state.lat} /></div>)
        }
        return (<Spinner message="Please Accept our !!!" />)
    }

    render() {
        return (
            <div class="container border" >
                <h1>My Application</h1>
                {this.renderContent()}
            </div>
        )

    }
}

export default ReacrStateExample1;