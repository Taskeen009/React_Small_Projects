 import Menuitem from "./menu-item";
 
 const Menulist=({list=[]})=>{
   return (
    <div classname="menu-list-container">
        {
            list && list.length ? list.map((listitem)=>{
             return <Menuitem item={listitem}/>
            }):null
        }
    </div>
   )
 }
 
 
 export default Menulist;