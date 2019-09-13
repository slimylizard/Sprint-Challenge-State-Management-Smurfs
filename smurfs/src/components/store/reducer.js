import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS
} from '../store/actions';

const initialState = {
    isFetching: false,
    error: '',
    smurf: [],
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
        default:
            return state;
    }
}