import React, { useState } from "react";

const Random=()=>{
  const [typeofcolour, setTypepfcolour]=useState('hex')
  const [color,setColor]=useState('#000000')

  const handleCreateRandomHexColor=()=>{
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    
  }

  const handleCreateRandomRgbColor=()=>{

  }
  return (
    <>
    <div style={{
      width:'100vw',
      height:'100vh',
      background:color
    }}>
        <button onClick={()=>setTypepfcolour('hex')}>Generate Hex Color</button>
        <button onClick={()=>setTypepfcolour('Rgb')}>Create RGB colour</button>
        <button onClick={typeofcolour==='hex'? handleCreateRandomHexColor: handleCreateRandomRgbColor}>Genrate Random Color</button>
    </div>
    </>
  )
}

export default Random;