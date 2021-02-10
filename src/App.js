import React from 'react'
import './App.css'

const App=()=>{
  const Url= "https://picsum.photos/300/400";
return(
  <>
    <div className='main'>
    <img src={Url} alt="Image" />
    <ul className='stars'>
     <li className='star'><i class="fa fa-thumbs-up"></i></li>
     <li className='star'><i class="fa fa-thumbs-up"></i></li>
     <li className='star'><i class="fa fa-thumbs-up"></i></li>
     <li className='star'><i class="fa fa-thumbs-up"></i></li>
     <li className='star'><i class="fa fa-thumbs-up"></i></li>
    </ul>
    <h3>ysadfkl</h3>
    <button>Click Me</button>
    </div>
  </>
)
}
export default App