import React from 'react';

const Smurf = props => {
    console.log(props.smurf.name)
    return (
        <div>
            <h1>{props.smurf.name}</h1>
        </div> 
    )
}

export default Smurf;