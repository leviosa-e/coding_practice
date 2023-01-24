// hook
function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }

  return [state, dispatch];
}

// function component
function Todos(props) {
  const [todos, todosDispatch] = useReducer(todosReducer, []);

  function handleAddClick(text) {
    todosDispatch({ type: "add", data: text });
  }

  // ...
}
