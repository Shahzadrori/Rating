import React from 'react'


const App=()=>{
  const Url= "https://picsum.photos/300/400";
return(
  <>
    <div className='main'>
    <img src={Url} alt="Image" />
    <ul className='star'>

    </ul>
    </div>
  </>
)
}
export default App