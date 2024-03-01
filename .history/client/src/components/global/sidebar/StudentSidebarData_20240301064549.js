import { IoIosHome,IoMdHelpCircle } from "react-icons/io";
import { MdEmail,MdContacts } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";


export const StudentSidebarData=[
       {
              title:"Home",
              icon:<IoIosHome />,
              route:"/"
       },
       {
              title:"Attendance",
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