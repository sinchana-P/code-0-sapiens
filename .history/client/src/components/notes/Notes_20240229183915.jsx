import React
 from 'react'
import { Button, Form, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Notes = () => {

    const [file, setFile] = useState(null);
//   const [addPdf, { isLoading, error }] = useAddPdfMutation();

const handleFileChange = (info) => {
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj);
    } else if (info.file.status === 'removed') {
      setFile(null);
    }
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

        <div className='notes-upload-container'>
            <Upload
                onChange={handleFileChange}
                showUploadList={false}
            >
                <Button icon={<UploadOutlined/>}>Click to Upload</Button>
            </Upload>
            <Button onClick={handleUpload} disabled={!file}>Upload</Button>
            {/* {isLoading && <div>Uploading...</div>} */}
            {/* {error && <div>Error: {error.message}</div>} */}
        </div>

    </div>
  )
}

export default Notes