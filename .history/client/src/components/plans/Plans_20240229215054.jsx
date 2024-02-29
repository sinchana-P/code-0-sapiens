import React, {useState} from 'react';
import { Form, Select, Checkbox } from 'antd';
import './Plans.css'

const SidebarData = [
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 1',
    completed: true 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 2',
    completed: false 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 3',
    completed: true 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 4',
    completed: false 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 1',
    chp_id: 'Chapter 5',
    completed: true 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 1',
    completed: false 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 2',
    completed: true 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 3',
    completed: true 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 4',
    completed: true 
  },
  {
    cls_id: '8',
    sub_id: '1',
    mod_id: 'Module 2',
    chp_id: 'Chapter 5',
    completed: true 
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
    console.log('acc');
    console.log(acc);
    return acc;
  }, {});

  const handleSubmit = () => {
    setIsSubmit(true)
  }

  return (
    <div className='plans-main'>
      <h3>Plans</h3>
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

        <div>
            {isSubmit && (
                <>
                {Object.keys(groupedChapters).map((module, index) => (
                  
                  <div key={index} className='module-chapters-checkbox'>
                  <h3>{module}</h3>
                  <CheckboxGroup>
                      {groupedChapters[module].map((chapter, i) => (
                      <Checkbox checked key={i} value={chapter} style={{width: '1200px'}} >
                          {chapter}
                      </Checkbox>
                      ))}
                  </CheckboxGroup>
                  
                  </div>
                  
              ))}
              <button>Update Plan</button>
                </>

            
            )}

            
        </div>


      </div>
   
  );
}

export default Plans;
