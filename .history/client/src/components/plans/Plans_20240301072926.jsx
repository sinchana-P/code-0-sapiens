import React, {useState} from 'react';
import { Form, Select, Checkbox } from 'antd';
import './Plans.css'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';


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
ChartJS.register(ArcElement, Tooltip, Legend);

const Plans = () => {

    const [isSubmit, setIsSubmit] = useState(false)

    const data = {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

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
      <h2 className='heading'>Plans</h2>
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

        <div className='plans-checkbox-'>
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

            <div style={{width:'350px', height: '350px'}}>
              <Pie
                data={data}
                width={50} 
                height={50} 
              />
            </div>                

            

        </div>


      </div>
   
  );
}

export default Plans;
