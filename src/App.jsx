import React, { useState } from 'react';
import 'antd/dist/reset.css'; // Ant Design's global reset
import axios from 'axios';
import { Typography, List } from 'antd';
import { HeroScrollDemo } from './components/HeroScrollDemo';
import { HeroHighlightDemo } from './components/HeroHighlightDemo';
import Cards from "./components/cardsComponent";
import Form1 from './components/Form1';
import About from "./components/about";
import Thankyou from "./components/Thankyou";
import Border from "./components/Border";

const { Title } = Typography;

function App() {
  const [matchedFiles, setMatchedFiles] = useState([]);

  return (
    <>
      <HeroScrollDemo />
      <HeroHighlightDemo />
      <Cards />
      <Form1 setMatchedFiles={setMatchedFiles} />
      {matchedFiles.length > 0 && (
        <div className="p-8">
          <Title level={2}>Matched Files:</Title>
          <List
            bordered
            dataSource={matchedFiles}
            renderItem={(file) => <List.Item>{file}</List.Item>}
          />
        </div>
      )}
      <About/>
      <Thankyou/>
      <Border/>
    </>
  );
}

export default App;
