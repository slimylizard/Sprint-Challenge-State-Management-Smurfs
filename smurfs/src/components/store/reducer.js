import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    ADD_SMURF
} from '../store/actions';

const initialState = {
    isFetching: false,
    error: '',
    smurf: [{
        name: 'ian',
        age: '12',
        height: '12',
        id: null

    }],
};

export const reducer = (state = initialState, action) => {
    console.log('state', state, action.payload)
    switch(action.type) {
        case FETCHING_DATA_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            } 
        case FETCHING_DATA_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurf: action.payload
            }
        case ADD_SMURF:
            return {
                ...state,
                smurf:[
                    ...state.smurf, action.payload
                ]
            }
        default:
            return state;
    }
}