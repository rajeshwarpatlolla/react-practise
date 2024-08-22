import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Counter from './Counter';
import { increment, decrement } from './store/counterActions';

function App() {
  const counter = useSelector((state) => state.count.value);

  const dispatch = useDispatch();

  const incrementCounterValue = () => {
    dispatch(increment());
  };

  const decrementCounterValue = () => {
    dispatch(decrement());
  };

  return (
    <div className="App">
      <div>Test</div>
      <div>count from store: {counter}</div>
      <Counter />
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={decrementCounterValue}>Decrease</button>
    </div>
  );
}

export default App;
