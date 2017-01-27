// a reduce takes in:
// the action
// copy of the current state

function posts(state = [], action) {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            console.log('I increment');
            const i = action.index;
            // return updated state
            return [
                ...state.slice(0,i),
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i + 1),
            ]
        default:
            return state;
    }
}

export default posts;
