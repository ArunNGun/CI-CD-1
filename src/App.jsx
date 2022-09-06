import React from 'react'

const App = () => {
    const handleClick = () => {
        alert('clicked')
    }
    return ( 
        <div style={{height:'100vh',width:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <a href='/' onClick={handleClick}>
            not authenticated
        </a>
        </div>
     );
}
 
export default App;