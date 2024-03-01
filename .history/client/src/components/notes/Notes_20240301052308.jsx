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
        <h2>Add Notes & Materials</h2>
       
        <dv></dv>
    </div>

    
  )
}

export default Notes