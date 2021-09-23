import './SidebarList.css'
import { NavLink } from 'react-router-dom'

const SidebarList = () => {
  return (
    <ul className='sidebarList'>
      <li><NavLink to="/app/home">Home</NavLink></li>
      <li><NavLink to="/app/schedule">Schedule</NavLink></li>
    </ul>
  )
}

export default SidebarList
