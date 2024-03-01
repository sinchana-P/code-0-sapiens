import './StudentSidebar.css'
import { StudentSidebarData } from './StudentSidebarData';
import { Link, NavLink } from 'react-router-dom';


const StudentSidebar=()=> {
  return (
    <div className='sidebar'>
       <ul className='sidebarList'>
        {
        StudentSidebarData.map((value,key)=>{
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

export default StudentSidebar