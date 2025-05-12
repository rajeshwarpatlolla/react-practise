import { useEffect, useLayoutEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './App.css';
import Counter from './components/Counter';
import Time from './components/Time';
import { increment, decrement } from './store/counterActions';

const Example = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect runs after paint');
  });

  useLayoutEffect(() => {
    console.log('useLayoutEffect runs before paint');
  });

  return <button onClick={() => setCount(count + 1)}>Increment</button>;
};

function App() {
  const counter = useSelector((state) => state.count.value);
  const [showTimer, setShowTimer] = useState(false);

  const dispatch = useDispatch();

  const incrementCounterValue = () => {
    dispatch(increment());
  };

  const decrementCounterValue = () => {
    dispatch(decrement());
  };

  return (
    <div className='App'>
      <div>Test</div>
      <Example />
      <div>count from store: {counter}</div>
      <Counter />
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={decrementCounterValue}>Decrease</button>
      <div>
        <button onClick={() => setShowTimer(!showTimer)}>{showTimer ? 'Stop Timer' : 'Start Timer'}</button>
      </div>
      {showTimer && <Time />}
    </div>
  );
}

export default App;
