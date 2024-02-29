import '../App.css'
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';


const Sidebar=()=> {
  return (
    <div className='sidebar'>
       <ul className='sidebarList'>
        {
        SidebarData.map((value,key)=>{
            return (
                    <Link to={value.route} key={key} className='row'>
                            <div id='icon'>{value.icon}</div>
                            <div id='title'>{value.title}</div>
                    </Link>
            )
        })
        }
       </ul>
    </div>
  )
}

export default Sidebar