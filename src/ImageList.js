import React, { Component } from 'react';
import "./style.css";
class ImageList extends Component {

    render() {

        const imageUrls = this.props.images.map(image => {
            return (
            <div className="col md-6" key={image.id}>
                <img className="imageUrl" src={image.urls.regular} />
            </div>    
            
            );
        })
        console.log(imageUrls)
        return (

            <div>{imageUrls}</div>
        );
    }
}

export default ImageList;