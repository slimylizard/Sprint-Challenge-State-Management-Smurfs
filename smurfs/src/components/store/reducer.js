const initialState = {
    isFetching: false,
    error: '',
    name: '',
    age: '',
    height: '',
    id: null,
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}