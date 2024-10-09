import { useState } from "react"
import QRCode from "react-qr-code"
import './style'

const Qrcode=()=>{

    const [qrcode, setQrcode]=useState("")
    const [input, setInput]=useState("")

    const handleGenerateQrcode=()=>{
        setQrcode(input)
    }
   return(
   <div>
    <h1>QR code Generator</h1>
    <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-cpde" id="Enter the value here"  value={input}/>
        <button disabled={input && input.trim()!==""? false:true} onClick={handleGenerateQrcode}>Generator</button>
    </div>
    <div>
        <QRCode
        id="qr-code-value"
        value={qrcode}
        size={400}
        bgColor="#fff"
        />
    </div>
   </div>
   )
}

export default Qrcode