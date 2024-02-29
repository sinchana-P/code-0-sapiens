import React, {useState} from 'react';
import { Form, Select, Checkbox } from 'antd';
import './Plans.css'

const SidebarData = [
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 1'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 2'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 3'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 4'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 5'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 1'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 2'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 3'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 4'
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 5'
  }
];

const CheckboxGroup = Checkbox.Group;

const Plans = () => {

    const [isSubmit, setIsSubmit] = useState(false)

  // Grouping chapters by module
  const groupedChapters = SidebarData.reduce((acc, curr) => {
    const { mod_id, chp_id } = curr;
    if (!acc[mod_id]) {
      acc[mod_id] = [];
    }
    acc[mod_id].push(chp_id);
    return acc;
  }, {});

  const handleSubmit = () => {
    setIsSubmit(true)
  }

  return (
    <div className='plans-main'>
      <h1>Plans</h1>
        <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            autoComplete="off"
        >
            <Form.Item label="Class" rules={[{ required: true, message: 'Please select class!' }]}>
            <Select placeholder="class">
                <Select.Option value="class8">Class 8</Select.Option>
                <Select.Option value="class9">Class 9</Select.Option>
                <Select.Option value="class10">Class 10</Select.Option>
            </Select>
            </Form.Item>
            <Form.Item label="Sub" rules={[{ required: true, message: 'Please select class!' }]}>
            <Select placeholder="Subject">
                <Select.Option value="maths">Maths</Select.Option>
                <Select.Option value="science">Science</Select.Option>
                <Select.Option value="social">Social</Select.Option>
            </Select>
            </Form.Item>
        </Form>
      
        <button onClick={handleSubmit}>Submit</button>

        


      </div>
   
  );
}

export default Plans;