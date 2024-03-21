import React from 'react'
import "./App.css"
import { useState } from 'react';
import { IoMdArrowDropright,IoMdArrowDropdown  } from "react-icons/io";

const Item = ({item}) => {
    const [isOpened,setIsOpened] = useState(false);
  return (
    <div>
        <button onClick={()=> item.children && setIsOpened(!isOpened)}  className='menu_item'>
            {item.children && (isOpened) ? <IoMdArrowDropdown style={{fontWeight:"bold"}}/> : <IoMdArrowDropright  style={{fontWeight:"bold"}}/>}
      {item.name}
      </button>

      {item.children &&(<div className={`sub_menu ${isOpened ? '': 'submenu-Shrunk'}`}>
        {item.children.map((subitem)=>(<Item item={subitem}/>))}
        </div>)}
    </div>
  )
}

export default Item
