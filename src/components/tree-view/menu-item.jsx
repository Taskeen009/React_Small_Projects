import Menulist from "./menu-list";
import { useState } from 'react';
const Menuitem = ({item}) => {

    const [displaychildren , setDisplaychildren]=useState({})
    return (
       <li>

        <div style={{display:'flex', gap:'20px'}}>
            <p>{item.label}</p>
            {item && item.children && item.children.length ? <span>+</span>:null}
        </div>
        {/* <p>{item.label}</p> */}
        { 
            item && item.children && item.children.length >0 ?
            <Menulist list={item.children}/>:null
        }
       </li>
    )
}
export default Menuitem;