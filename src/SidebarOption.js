import React from 'react';
import './SidebarOption.css'

const SidebarOption = ({ Icon, title }) => {
  return (
    <div className='sidebar-option'>
    { Icon && <Icon className='sidebar-option-icon' /> }
    { Icon ? <h4>{title}</h4> : <p>{title}</p> }
    </div>
  )
}

export default SidebarOption;