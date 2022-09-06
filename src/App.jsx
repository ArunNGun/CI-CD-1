import React from 'react'

const App = () => {
    const handleClick = () => {
        alert('clicked')
    }
    return (
        <div>
            <div
            style={{
                padding:'20px',
                fontSize:'50px',
                display:'flex',
                justifyContent:'center'
            }}
            >
                This is an example of Microfrontend
            </div>
            <p
            style={{display:'flex',justifyContent:'center',fontSize:25}}
            >
                This is a container App
            </p>
        <div style={{paddingTop:'20vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
        <a href='/' onClick={handleClick}>
            not authenticated
        </a>
        </div>
        </div> 
     );
}
 
export default App;