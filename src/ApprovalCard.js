import React from 'react';

export const ApprovalCard = (props) => {
    console.log(props.children)
    return (
        <div>
            <div className="row">
                <div className="col">
                    <div>
                        Are you Sure ??
                        {props.children}
                    </div>
                    <div>
                    <button className="btn btn-success p">Approve</button>
                  <button className="btn btn-warning">Reject</button>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}


export default ApprovalCard;