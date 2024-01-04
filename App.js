import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAmount } from './redux/counterSlice';
import { useEffect, useState } from 'react';
import './App.css';
import { getApi } from './redux/apiSlice';

function App() {
  const [inputVal,setInputVal] = useState(null)
  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const input = (e) => {
    setInputVal(Number(e.target.value))
  }
  
  const api = useSelector(state => state.api)

  useEffect(() => {
    dispatch(getApi())
  }, [])
  
 
  return (
    <div className="App">
      <h2 style={{display:'grid', justifyContent:'center'}} >React Redux Examples </h2>
      <div style={{display:'flex', justifyContent:"center"}} >
        <div>
          <div  style={{display:'grid',justifyContent:'center'}} >
            <button style={{cursor:'pointer'}} onClick={() => dispatch(increment())} > + </button>
            <div style={{display:'grid',justifyContent:'center'}} > {counter} </div>
            <button style={{cursor:'pointer',width:'24px'}} onClick={() => dispatch(decrement())} > - </button>
          </div>
          <input type="number" style={{width:'80px'}} placeholder='Sayı giriniz' onChange={input} />
          <button onClick={() => dispatch(incrementAmount(inputVal))} > Arttır </button>
        </div>
      </div>

        <h3 style={{display:'grid', justifyContent:'center',marginTop:'30px'}} > Fetch Api </h3>
      <div style={{display:'flex', justifyContent:'center'}}>
        <ul>
          {api?.data.map((item,index) => (
            <li key={index} >{item.title} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;