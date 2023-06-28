/*
 * @Description: 
 * @Version: 2.0
 * @Author: huzhenghui
 * @Date: 2023-06-27 23:00:22
 * @LastEditors: huzhenghui
 * @LastEditTime: 2023-06-28 15:21:36
 */
"use client"
import React, { useState } from 'react';
import { Editor, EditorState } from 'draft-js';
import 'draft-js/dist/Draft.css';

const MyEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return (
    <div className="my-editor" style={{ border: '1px solid black', padding: '10px' }}>
      <Editor editorState={editorState} onChange={onChange} />
    </div>
  );
};

export default MyEditor;
