// import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { decrease, increase } from './store/index'

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();


  // const toggleCounter = () => {
  //   console.log('sad');
  //   dispatch({ type: 'toggleCounter' });
  // };

  return (
    <div className='App'>
      <h1>Hello Redux Basic</h1>
        <>
          <div className='counter'>
            Counter: {globalState.value}
          </div>
          <div>
            <button
              className='btn'
              onClick={() => dispatch(increase(5))}
            >
              increase +
            </button>
            <button
              className='btn'
              onClick={() => dispatch(decrease(2))}
            >
              decrease -
            </button>
          </div>
        </>

      <div>
        <button className='btn' 
        // onClick={toggleCounter}
        >
          Hide/Show Counter Number
        </button>
      </div>
    </div>
  );
}

export default App;
