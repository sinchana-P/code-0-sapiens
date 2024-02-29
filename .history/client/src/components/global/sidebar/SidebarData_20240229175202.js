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
              title:"Profile",
              icon:<MdEmail />,
              route:"/mailbox"
       },
       {
              title:"Reports",
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