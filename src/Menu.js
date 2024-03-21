import React from 'react'
import Item from './Item'

const Menu = ({items}) => {
  return (
    <div className='wrapper'>
    {items.children.map(item =><Item item={item}/>)}
    </div>
  )
}

export default Menu
