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
              route:"/mailbox"
       },
       {
              title:"Attendance",
              icon:<MdContacts />,
              route:"/reports"
       },
       {
              title:"Profile",
              icon:<IoMdHelpCircle />,
              route:"/help"
       },
       {
              title:"calendar",
              icon:<FaRegCalendarCheck />,
              route:"/calendar"
       },
]