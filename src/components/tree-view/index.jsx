import Menulist from "./menu-list";
const Tree=({menus=[]})=>{
  return(
    <div className="tree-view-container">
        <Menulist list={menus}/>
    </div>
  )
}

export default Tree;