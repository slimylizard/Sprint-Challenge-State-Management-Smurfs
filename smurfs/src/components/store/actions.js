import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_DATA_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('this is:', res)
            dispatch({type: FETCHING_DATA_SUCCESS, payload: res.data.map(({name, age, height, id}) => [{name, age, height, id}])})
        })
}