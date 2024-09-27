import { useSelector } from 'react-redux';

function Counter() {
  const counter = useSelector((state) => state.count.value);

  return (
    <div className="App">
      <div>count from counter component: {counter}</div>
    </div>
  );
}

export default Counter;
