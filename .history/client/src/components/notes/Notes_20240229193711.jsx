import {useState} from 'react'
import { Button, Form, Select, Upload, Card, Space, Input } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { FaRegFileAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import './Notes.css'

const Notes = () => {

    const [file, setFile] = useState(null);
//   const [addPdf, { isLoading, error }] = useAddPdfMutation();

const handleFileChange = (info) => {
    // console.log(info)
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj);
    } else if (info.file.status === 'removed') {
      setFile(null);
    }
    console.log(file)
  };

  const handleUpload = () => {

    console.log(file)
    // if (file) {
    //   addPdf(file); // Call the mutation function with the selected file
    // }
  };

  return (
    <div className='notes-container'>
        <h1>Add Notes & Materials</h1>
       
        <div className='notes-form-container'>
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
            >
            <Form.Item
            label="class"
            name="class"
            rules={[
                {
                required: true,
                message: 'Please select class!',
                },
            ]}
            >
                <Select placeholder='Select Class'>
                    <Select.Option value="class8">Class 8</Select.Option>
                    <Select.Option value="class9">Class 9</Select.Option>
                    <Select.Option value="class10">Class 10</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
            label="module"
            name="module"
            rules={[
                {
                required: true,
                message: 'Please select module!',
                },
            ]}
            >
                <Select placeholder='Select Module'>
                    <Select.Option value="module1">Module 1</Select.Option>
                    <Select.Option value="module2">Module 2</Select.Option>
                </Select>
            </Form.Item>

            <Form.Item
            label="class"
            name="class"
            rules={[
                {
                required: true,
                message: 'Please select module!',
                },
            ]}
            >
                <Select placeholder='Select Module'>
                    <Select.Option value="chapter1">Chapter 1</Select.Option>
                    <Select.Option value="chapter2">Chapter 2</Select.Option>
                    <Select.Option value="chapter3">Chapter 3</Select.Option>
                    <Select.Option value="chapter4">Chapter 4</Select.Option>
                    <Select.Option value="chapter5">Chapter 5</Select.Option>
                </Select>
            </Form.Item>

        </Form>
        </div>

        <Space direction="vertical" size={16}>
            <div className='notes-upload-main'>
            <div className='notes-upload-container'>
            
                    <Card title="Material" style={{ width: 300 }}>
                        <FaRegFileAlt size={22}/>
                        <div className='notes-pdf'>
                            <Upload
                                onChange={handleFileChange}
                                showUploadList={true}
                            >
                                <Button icon={<UploadOutlined/>}>Click to Upload</Button>
                            </Upload>
                            <Button onClick={handleUpload} disabled={file}>Send</Button>
                        </div>
                        <p>PDF, PPT, DOC, XLS, TXT, etc</p>
                        {/* {isLoading && <div>Uploading...</div>} */}
                        {/* {error && <div>Error: {error.message}</div>} */}
                    </Card>
                </div>
            
                <div className='notes-upload-container'>
                    <Card title="Link" style={{ width: 300 }}>
                        <FaLink size={22}/>
                        <div className='notes-link'>
                            <Input placeholder="Basic usage" />
                            <Button onClick={handleUpload} disabled={file}>Send</Button>
                        </div>
                        <p>URL or Web Address</p>
                        {/* {isLoading && <div>Uploading...</div>} */}
                        {/* {error && <div>Error: {error.message}</div>} */}
                    </Card>
                </div>
            </div>           
        </Space>
    </div>

    
  )
}

export default Notes