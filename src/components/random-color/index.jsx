import React, { useEffect, useState } from "react";

const Random=()=>{
  const [typeofcolour, setTypepfcolour]=useState('rgb')
  const [color,setColor]=useState('#000000')


   const RandomcolorUtility=(length)=>{
    return Math.floor(Math.random()*length)
   }
  const handleCreateRandomHexColor=()=>{
    const hex=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    let hexColr="#";
    for(let i=0;i<6;i++){
      hexColr+=hex[RandomcolorUtility(hex.length)]
    }
   console.log(hexColr)
   setColor(hexColr)
  }

  const handleCreateRandomRgbColor=()=>{
     const r=RandomcolorUtility(256);
     const g=RandomcolorUtility(256);
     const b=RandomcolorUtility(256);
     
     setColor(`rgb(${r}, ${g}, ${b})`);
     

  }

  useEffect(()=>{
    if(typeofcolour==='rgb')
      handleCreateRandomRgbColor();
    else
    handleCreateRandomHexColor()
  },[typeofcolour])
  return (
    <>
    <div style={{
      width:'100vw',
      height:'100vh',
      background:color
    }}>
        <button onClick={()=>setTypepfcolour('hex')}>Generate Hex Color</button>
        <button onClick={()=>setTypepfcolour('rgb')}>Create RGB colour</button>
        <button onClick={typeofcolour==='hex'? handleCreateRandomHexColor: handleCreateRandomRgbColor}>Genrate Random Color</button>
        <div style={{display:"flex",
          alignItems:'center',
          justifyContent:'center',
          color:'#fff',
          fontSize:'60px',
          marginTop:'50px'
        }}>

          <h3>{typeofcolour==='rgb'? 'RGB Color' : 'HEX Color'}</h3>
          <h1>{color}</h1>
        </div>
    </div>
    </>
  )
}

export default Random;