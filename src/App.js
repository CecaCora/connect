const App = (() => {
  let state = {};

  const getState = () => state;
  const setState = (changes) => {
    state = { ...state, ...changes };
  };
  return Object.freeze({ getState, setState });
})();

export default App;
