import React, { useState } from 'react';

import  MonacoEditor from '@monaco-editor/react';

const CodeEditor = () => {
    // const CodeEditor = ({ code, setCode }) => {
    const [code ,setCode ]= useState()
  return (
    <MonacoEditor
      height="400px"
      language="javascript"
      value={code}
      onChange={(value) => setCode(value)}
    //   options={{
    //     theme: 'vs-dark',
    //   }}
    />
  );
};

export default CodeEditor;