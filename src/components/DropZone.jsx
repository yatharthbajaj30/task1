import { useRef } from 'react';
import {useDropzone} from 'react-dropzone';
import React, { useEffect, useState } from 'react';
import 'react-chat-widget/lib/styles.css';


function Basic(props) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

   const firstUpdate = useRef(true);

  
  useEffect(()=>{
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    console.log('je',acceptedFiles);
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);
    if(files.length > 0){
    fetch('https://b44f8b50-59fc-4aa0-b1b7-242975639494-00-1f7qhbmmi7ydk.kirk.replit.dev/',{
      method: 'POST',
      body: formData
    })
    }
   
  },[acceptedFiles])

    




  return (
    <section className="container" style={{width:'50vw'}}>
      <div {...getRootProps({className: 'dropzone'})} style={{border:'2px dotted black',boxShadow:'5px 10px 20px 0px ',padding:'20px'}} >
        <input {...getInputProps()}  />
        <p style={{textAlign:'center'}}>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside >
        <h4 style={{textAlign:'center'}}>Files</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}




export default Basic;