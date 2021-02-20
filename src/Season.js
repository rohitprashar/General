import React from 'react';

export const Season = (props) => {
    console.log('Inside Season '+props)
    return (
        <div>
            <div className="container border">
            <div className="container">
               
                  <h1>This Is Seasons Copmonent : {props.lat}</h1>
                 
            </div>
              </div>
        </div>
    )
}


export default Season;