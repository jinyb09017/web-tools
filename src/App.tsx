import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button,  Input, Col, Row, Space} from 'antd';
import {
  CopyOutlined,
  DatabaseOutlined,
  FileExcelOutlined,
  DownloadOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { TextArea } = Input;


const App : React.FC = () => {
  const [textValue, setTextValue] = useState('');
  const [jsonValue, setJsonValue] = useState('');

  const textareaStyle: React.CSSProperties = {
    //width: '100%', // 使TextArea宽度占据整个页面
    height: '100vh', // 使TextArea高度占据整个页面
  };

  const iconStyle: React.CSSProperties = {
    fontSize:'16px',
    color:'blue'
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    //alert(e.target.value);
    setTextValue(e.target.value);
    //
    const jsonObject = JSON.parse(textValue);
    const jsonString = JSON.stringify(jsonObject, null, 2);
    setJsonValue(jsonString);
    console.log('json value', jsonString);
  }
  

  // const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   alert(e.target.value);
  // };
  const delClick =()=>{
    setTextValue('');
  }




  return <div>
    <Row>
      <Col span={24}> this is tools</Col>
    </Row>
    <Row>
    <Col span={11}><TextArea value={textValue} onChange={handleChange} style={textareaStyle} placeholder='input json'></TextArea></Col>
    <Col span={1}>
      <Space align='center' direction='vertical' size='small' style={{ display: 'flex' }}>
        <CopyOutlined style={iconStyle}/>
        <DatabaseOutlined style={iconStyle}/>
        <FileExcelOutlined style={iconStyle}/>
        <DownloadOutlined style={iconStyle}/>
        <DeleteOutlined onClick={delClick} style={iconStyle}/>
      </Space>
    </Col>
    <Col span={12}><TextArea value={jsonValue} style={textareaStyle} ></TextArea></Col>
  </Row></div>

}




const click = () => {
  alert('hello');
}

function click1(str:number) {
  alert('hello1' + str);
}

const age:number = 100;
console.log('age', age);

export default App;
