// a reduce takes in:
// the action
// copy of the current state

function posts(state = [], action) {
  console.log('posts', state, action);
  return state;
}

export default posts;
