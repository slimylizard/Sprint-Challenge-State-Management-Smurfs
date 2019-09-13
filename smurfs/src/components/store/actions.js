import axios from 'axios';

export const FETHCING_ITEM_START = 'FETHCING_ITEM_START';

export const getSmurfs = () => dispatch => {
    dispatch({ type: FETHCING_ITEM_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => console.log(res))
}