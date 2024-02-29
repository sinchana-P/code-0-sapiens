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
              route:"/reports"
       },
       {
              title:"Plan",
              icon:<IoMdHelpCircle />,
              route:"/help"
       },
       {
              title:"Profile",
              icon:<FaRegCalendarCheck />,
              route:"/calendar"
       },
]