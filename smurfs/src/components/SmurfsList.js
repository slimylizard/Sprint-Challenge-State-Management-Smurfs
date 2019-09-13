import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getSmurfs } from './store/actions';
import Smurf from './Smurf';

const SmurfsList = ({ getSmurfs, isFetching, smurf}) => {
    useEffect(() => {
        console.log('here');
        getSmurfs()
    }, [getSmurfs]);    
    if(isFetching) {
        return (
            <div>Loading...</div>
        )
    }
    console.log(smurf)
    return (
        <div className='smurfs-list'>
            <h1>SMURFS</h1>
            {smurf.map(smurf => <Smurf
            smurf={smurf}/>)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        smurf: state.smurf
    }
}
export default connect(
    mapStateToProps,
    {getSmurfs}
)(SmurfsList);