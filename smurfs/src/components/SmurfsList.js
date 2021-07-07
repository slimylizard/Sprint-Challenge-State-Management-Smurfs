import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf } from './store/actions';
import Smurf from './Smurf';

const SmurfsList = ({ getSmurfs, addSmurf, isFetching, smurf}) => {
    const [newSmurf, setNewSmurf] = useState('');
    const [editing, setEditing] = useState(false);
    useEffect(() => {
        console.log('here');
        getSmurfs()
    }, [getSmurfs, addSmurf]);    
    if(isFetching) {
        return (
            <div>Loading...</div>
        )
    }
    
    const handleChange = e => {
        setNewSmurf(e.target.value);
    };

    const updateSmurfList = e => {
        e.preventDefault();
        addSmurf({name: newSmurf});
        setEditing(false);
    }

    console.log(smurf)
    return (
        <div className='smurfs-list'>
            {!editing ? (
                <div>
                <h1>SMURFS</h1>
            {smurf.map(smurf => <Smurf
            key={smurf.id}
            smurf={smurf}/>)}
            <button className='button' onClick={()=> setEditing(true)}>Add Smurf</button>
            </div>
            ): (
                <div>
                    <input 
                    clasName='form'
                    type='text'
                    name='newSmurf'
                    value={newSmurf}
                    onChange={handleChange} />
                    <button onClick={updateSmurfList}>
                        Add Smurf
                    </button>
                </div>
            )}
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
    {getSmurfs, addSmurf}
)(SmurfsList);