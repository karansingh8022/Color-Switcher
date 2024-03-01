import { useState } from 'react'

function App(props) {
  const [color, setColor] = useState("olive");
  
  return (
    <>
      <div className='vw-100 vh-100 d-flex justify-content-center align-items-center' style={{backgroundColor: color}}>
        <div className='bg-light m-2 rounded-pill' style={{width: "auto", height: "auto", padding:"3px"}}>
          <button 
          onClick={()=>(setColor("blue"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'blue'}}>Blue</button>

          <button 
          onClick={()=>(setColor("red"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'red'}}>Red</button>

          <button 
          onClick={()=>(setColor("green"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'green'}}>Green</button>

          <button 
          onClick={()=>(setColor("cyan"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'cyan'}}>Cyan</button>

          <button 
          onClick={()=>(setColor("indigo"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'indigo'}}>Indigo</button>

          <button 
          onClick={()=>(setColor("black"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'black'}}>Black</button>

          <button 
          onClick={()=>(setColor("orange"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'orange'}}>Orange</button>

          <button 
          onClick={()=>(setColor("teal"))}
          className='m-1 text-white border-0' 
          style={{padding: "5px", fontFamily: "sans-serif", borderRadius: "1rem", width: "70px", backgroundColor: 'teal'}}>Teal</button>
          
          
        </div>
      </div>
    </>
  );
}

export default App;




 

/**
 * for = htmlFor
 * class = className
 * checked(for boxes) = defaultChecked
 */
