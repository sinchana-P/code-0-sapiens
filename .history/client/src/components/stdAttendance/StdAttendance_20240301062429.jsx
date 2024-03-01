import React, { useState } from 'react'
// import dayjs from 'dayjs';
import { Form, Select, Checkbox, DatePicker, TimePicker, Table} from 'antd';

import './StdAttendance.css'

const Attendance = () => {

    const [selectedRows, setSelectedRows] = useState([{}])

    const attendanceData = [
    {
        key: 1,
        subject:"Maths",
        student_attendance: "90",
        isPresent:false    
     },
    {
        key: 2,
        subject:"Science",
        student_attendance: "70",
        isPresent:true    
     },
    {
        key: 3,
        subject:"Maths",
        student_attendance: "70",
        isPresent:true    
     },
    {
        key: 4,
        student_id: "ST004",
        student_name: "Shraddha",
        student_attendance: "80",
        isPresent:false    
     },
    {
        key: 5,
        student_id: "ST005",
        student_name: "Xyz",
        student_attendance: "90",
        isPresent:true    
     },
    ]


    const attendanceColumns = [
        {
            key: '1',
            dataIndex: 'student_id',
            title: 'Student Id',
        },
        {
            key: '2',
            dataIndex: 'student_name',
            title: 'Student Name',
        },
        {
            key: '3',
            dataIndex: 'student_attendance',
            title: 'student_attendance',
        },
        
    ]

  return (
    <div className='attendance-main'>
        <h2>Student Attendance</h2>
        
        <div>
        <Table
        dataSource={attendanceData}
        columns={attendanceColumns}
        pagination={false}
        
      >
      </Table>

        </div>


    </div>
  )
}

export default Attendance