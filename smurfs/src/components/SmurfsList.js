import React, { useEffect } from 'react';
import { connect } from 'net';
//import { getSmurf }

const SmurfsList = () => {
    return (
        <h1>Smurfs Incoming</h1>
    )
}

export default connect(
    mapStateToProps,
    {}
)(SmurfsList);