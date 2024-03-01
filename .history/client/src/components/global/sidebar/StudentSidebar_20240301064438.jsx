import './St.css'
import { StData } from './StData';
import { Link, NavLink } from 'react-router-dom';


const St=()=> {
  return (
    <div className='sidebar'>
       <ul className='sidebarList'>
        {
        SidebarData.map((value,key)=>{
            return (
              <NavLink to={value.route} key={key} className='row' >
                <div id='icon'>{value.icon}</div>
                <div id='title'>{value.title}</div>
              </NavLink>
            )
        })
        }
       </ul>
    </div>
  )
}

export default St