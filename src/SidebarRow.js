import React from 'react'
import "./SidebarRow.css"

function SidebarRow({ selected ,icon, title }) {
    return (
        <div className={'SidebarRow ${selected && "selected"}'}>
            <icon className = 'SidebarRow_icon '/>
            <h2 className='SidebarRow_title'>{title}</h2> 
        </div>
    )
}

export default SidebarRow