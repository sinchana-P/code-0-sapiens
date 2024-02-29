import React, { useState } from 'react'
// import dayjs from 'dayjs';
import { Form, Select, Checkbox, DatePicker, TimePicker, Table} from 'antd';


import './Attendance.css'

const Attendance = () => {

    const [selectedRows, setSelectedRows] = useState([])

    const attendanceData = [
    {
        key: 1,
        student_id: "ST001",
        student_name: "Sanketh",
        student_attendance: "90",
        isPresent:false    
     },
    {
        key: 2,
        student_id: "ST002",
        student_name: "Nandish",
        student_attendance: "70",
        isPresent:true    
     },
    {
        key: 3,
        student_id: "ST003",
        student_name: "Sinchana",
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
        Table.SELECTION_COLUMN,
        {
            key: '4',
            dataIndex: '',
            title: 'Mark Attendance',
        },
    ]

    const onChangeDate = (date, dateString) => {
        console.log(dateString);
    };

    const onChangeTime = (time, timeString) => {
        console.log(timeString);
    };

  return (
    <div className='attendance-main'>
        <h2>Attendance</h2>
        <div>
            <Form
                layout="vertical"
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
            <div className='attendance-class-inputs-container'>
                <div className='attendance-class-each'>
                    <Form.Item label="Class" style={{width: '300px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                    <Select placeholder="class">
                        <Select.Option value="class8">Class 8</Select.Option>
                        <Select.Option value="class9">Class 9</Select.Option>
                        <Select.Option value="class10">Class 10</Select.Option>
                    </Select>
                    </Form.Item>
                </div>

                <div className='attendance-class-each'>
                    <Form.Item label="Sub" style={{width: '300px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                    <Select placeholder="Subject">
                        <Select.Option value="maths">Maths</Select.Option>
                        <Select.Option value="science">Science</Select.Option>
                        <Select.Option value="social">Social</Select.Option>
                    </Select>
                    </Form.Item>
                </div>

                <div className='attendance-class-each'>
                    <Form.Item label="Sub" rules={[{ required: true, message: 'Please select class!' }]}>
                        <DatePicker onChange={onChangeDate} style={{width: '200px' }} />
                    </Form.Item>
                </div>

                <div className='attendance-class-each'>
                    <Form.Item label="Sub" rules={[{ required: true, message: 'Please select class!' }]}>
                            <TimePicker type='time' onChange={onChangeTime} style={{width: '200px' }}/>
                    </Form.Item>
                </div>
                </div>
            </Form>
        </div>

        <div>
        <Table
        dataSource={attendanceData}
        columns={attendanceColumns}
        pagination={false}
        rowSelection={
          {
            type: 'checkbox',
            hideSelectAll: true,
            onChange: (key) => {
              console.log(key)
            },
            onSelect: (keySelected) => {
              console.log(keySelected)
              setSelectedRows(ses)
              console.log(selectedRows)
              
            //   let toggledTodos = todos.map(todo => {
            //     if(todo.key === keySelected.key) {
            //       console.log("Same key")
            //       return {
            //         ...todo,
            //         completed: !todo.completed
            //       }
            //     }
            //     return todo
            //   })

            //   setTodos(toggledTodos) 

              
            }
          }
        }
        
        
      >
      </Table>
        </div>


    </div>
  )
}

export default Attendance