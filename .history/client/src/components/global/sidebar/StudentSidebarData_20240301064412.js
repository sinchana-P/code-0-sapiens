import { IoIosHome,IoMdHelpCircle } from "react-icons/io";
import { MdEmail,MdContacts } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";


export const SidebarData=[
       {
              title:"Home",
              icon:<IoIosHome />,
              route:"/"
       },
       {
              title:"Notes",
              icon:<MdEmail />,
              route:"/notes"
       },
       {
              title:"Attendance",
              icon:<MdContacts />,
              route:"/attendance"
       },
       {
              title:"Plan",
              icon:<IoMdHelpCircle />,
              route:"/plans"
       },
       // {
       //        title:"Profile",
       //        icon:<FaRegCalendarCheck />,
       //        route:"/profile"
       // },
]