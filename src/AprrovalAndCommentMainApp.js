import React from 'react';
import ReactDOM from 'react-dom';
import {CommentDetail} from './CommentDetail';
import { ApprovalCard } from "./ApprovalCard";
export const App = () => {
    return (
        <div>
            <div className="container ">
            <div className="container">
                <ApprovalCard>
                <CommentDetail name="Rohit"/>
                </ApprovalCard>
                <ApprovalCard>
                <CommentDetail name="Raju"/>
                </ApprovalCard>
               
                <ApprovalCard>
                <CommentDetail name="Patel"/>
                </ApprovalCard>
              
            </div>
              </div>
        </div>
    )
}


ReactDOM.render(<App/>,document.querySelector('#root'))