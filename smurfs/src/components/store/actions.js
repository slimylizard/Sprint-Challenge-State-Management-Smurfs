import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const ADD_SMURF = 'ADD_SMURF';

export const addSmurf = name => {
    return ({type: ADD_SMURF, payload: name})
}

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_DATA_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is:', res)
            dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data})
        })
}