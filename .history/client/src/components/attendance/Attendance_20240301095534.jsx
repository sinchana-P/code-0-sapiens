import React, { useState } from 'react'
// import dayjs from 'dayjs';
import { Form, Select, Checkbox, DatePicker, TimePicker, Table} from 'antd';
import axios from 'axios'

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

    const [stdClass, setStdClass] = useState('')
    const [subject, setSubject] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const onChangeDate = (date, dateString) => {
        // console.log(dateString);
        setDate(dateString)
    };

    const onChangeTime = (time, timeString) => {
        // console.log(timeString);
        setTime(timeString)
    };

    const onSubmit = () => {

        console.log(stdClass, subject, date, time)
        
        const res = axios.get('http://localhost:3500/getstudents', {
            params: {class: stdClass, subject }
        })

        console.log(res)

    }

    const handleUpdateAttendance = (e) => {
        console.log("hiii")
        console.log(e);
        
        
        // axios.get('http://localhost:3500/sendattendance', {
        //     params: {value}
        // })
    }

  return (
    <div className='attendance-main'>
        <h2 className='heading'>Attendance</h2>
        <div>
            <Form
                layout="vertical"
                name="basic"
                labelCol={{ span: 10 }}
                wrapperCol={{ span: 15 }}
                style={{ maxWidth: 80 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
            <div className='attendance-class-inputs-container'>
                <div className='selectClass'>
                <div className='attendance-class-each'>
                    <Form.Item label="Class" style={{width: '200px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                    <Select placeholder="Class" onChange={value => setStdClass(value)}>
                        <Select.Option value="8">Class 8</Select.Option>
                        <Select.Option value="9">Class 9</Select.Option>
                        <Select.Option value="10">Class 10</Select.Option>
                    </Select>
                    </Form.Item>
                </div>

                <div className='attendance-class-each'>
                    <Form.Item label="Subject" style={{width: '200px' }} rules={[{ required: true, message: 'Please select class!' }]}>
                    <Select placeholder="Subject" onChange={value => setSubject(value)}>
                        <Select.Option value="maths">Maths</Select.Option>
                        <Select.Option value="science">Science</Select.Option>
                        <Select.Option value="social">Social</Select.Option>
                    </Select>
                    </Form.Item>
                </div>
                </div>

                <div className='selectClass'>
                <div className='attendance-class-each'>
                    <Form.Item label="Date" rules={[{ required: true, message: 'Please select class!' }]}>
                        <DatePicker onChange={onChangeDate} style={{width: '200px' }} />
                    </Form.Item>
                </div>

                <div className='attendance-class-each'>
                    <Form.Item label="Time" rules={[{ required: true, message: 'Please select class!' }]}>
                            <TimePicker type='time' onChange={onChangeTime} style={{width: '200px' }}/>
                    </Form.Item>
                </div>
                </div>

                <div className='selectClass' style={{marginTop: '6rem'}}>
                    <button onClick={onSubmit}>Submit</button>
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
                    console.log(selectedRows)
                    setSelectedRows([...selectedRows, keySelected])
                    console.log(selectedRows)
                    
                }
          }
        }
      >
      </Table>

        </div>
        <button onClick={handleUpdateAttendance}>Update Attendance</button>


    </div>
  )
}

export default Attendance