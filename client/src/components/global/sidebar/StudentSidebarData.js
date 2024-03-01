import { IoIosHome,IoMdHelpCircle } from "react-icons/io";
import { MdEmail,MdContacts } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";


export const StudentSidebarData=[
       {
              title:"Home",
              icon:<IoIosHome />,
              route:"/student"
       },
       {
              title:"Attendance",
              icon:<MdEmail />,
              route:"/student/attendance"
       },
       {
              title:"Notes",
              icon:<MdContacts />,
              route:"/student/notes"
       },
       {
              title:"Doubts",
              icon:<IoMdHelpCircle />,
              route:"/student/doubts"
       },
       // {
       //        title:"Profile",
       //        icon:<FaRegCalendarCheck />,
       //        route:"/profile"
       // },
]