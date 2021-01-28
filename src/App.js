const App = (() => {
  const state = {};
  const getState = () => state;
  const setState = (changes) => {
    console.log(state, changes);
  };
  return Object.freeze({ getState, setState });
})();

export default App;
