import React from 'react'
import './App.css'

const App=()=>{
  const Url= "https://picsum.photos/300/300";
return(
  <>
    <div className='main'>
    <h2>Tell us how you like it</h2>
    <img src={Url} alt="Image" />
    <ul className='stars'>
     <li className='star'><i className="likee fa fa-star"></i></li>
     <li className='star'><i className="likee fa fa-star"></i></li>
     <li className='star'><i className="likee fa fa-star"></i></li>
     <li className='star'><i className="likee fa fa-star"></i></li>
     <li className='star'><i className="likee fa fa-star"></i></li>
    </ul>
    <h3>ysadfkl</h3>
    <button>Click Me</button>
    </div>
  </>
)
}
export default App