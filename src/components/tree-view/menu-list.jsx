 import Menuitem from "./menu-item";
 
 const Menulist=({list=[]})=>{
   return (
    <ul classname="menu-list-container">
        {
            list && list.length ? list.map((listitem)=>{
             return <Menuitem item={listitem}/>
            }):null
        }
    </ul>
   )
 }
 
 
 export default Menulist;