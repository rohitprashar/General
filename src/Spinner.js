import React from 'react';
import "./style.css";

export const Spinner = (props) => {
    return (
        <div className="container">

        
        <div class="spinner-border" role="status">
    <span class="sr-only">{props.message}</span>
        </div>

        </div>
    )
};

Spinner.defaultProps={
    message:'hello bhaiyajii'
}
