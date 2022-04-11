import { useState } from 'react';
import './App.css';

// function App() {
//   const [counter,setCounter]=useState(0);

//   const handleChange=(value)=>{
    
//     setCounter(counter+value);
//   }
//   const handleChangedouble=(value)=>{
   
//     setCounter(counter*value);
//   }
//   return (
//     <div className="App">
//    <h3>Counter:{counter}</h3>
//    <button onClick={()=>{handleChange(1)}}>Add</button>
//    <button onClick={()=>{handleChange(-1)}}>Reduce</button>
//    <button onClick={()=>{handleChangedouble(2)}}>Double</button>
//     </div>
//   );
// }
function App() {
  const[counter,setCounter]=useState(0);
  const handleAdd=()=>{
    
    setCounter(counter+1)
  };
  const handleSub=()=>{
    if(counter<=0)
    {
      return
    }
    setCounter(counter-1)
  };
  const handleDouble=()=>{

    setCounter(counter*2)
  };
  return (
        <div className="App">
        <h3 className={counter%2===0 ? "red-color" :"green-color"}>Counter:{counter}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleSub}>Sub</button>
        <button onClick={handleDouble}>Double</button>
        </div>
     );
}

export default App;
