import './App.css';
import { useEffect } from 'react';
import Dialog from './Components/Dialog';
import Home from './Components/Home'



function App() {
  
  useEffect(()=>{
    console.log("hee")
  },[])
  return (
   <>
   <Dialog/>
 

   
   </>
  );
}

export default App;
