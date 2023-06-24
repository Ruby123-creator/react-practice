// Develop a file upload component to upload multiple files simultaneously. It should display progress indicators for each file and should display a success or error message after the upload is complete.
import React, { useState } from 'react'
const MAX_COUNT =5;

  
const FileUpload = () => {
    const [uploadedFiles ,setUploadedFiles] = useState([])
  const [fileLimit ,setFileLimit] = useState(false)
  

  const handleUploadFiles = files => {
    const uploaded = [...uploadedFiles];
    let limitExceeded = false;
files.some((file) => {
    if (uploaded.findIndex((f) => f.name === file.name) === -1) {
        uploaded.push(file);
        if (uploaded.length === MAX_COUNT) setFileLimit(true);
        if (uploaded.length > MAX_COUNT) {
            alert('you can only add maximum 5 files')
            setFileLimit(false);
            limitExceeded = true;
            return true;

        }
    }
    })
 if(!limitExceeded)setUploadedFiles(uploaded);

  }

  const HandleFiles =(e)=>{
    console.log(e.target.files)
    // The “arguments object” is an array-like object that stores all the parameters passed to a function…even if the function declaration doesn’t specify any parameters.


    const chosenFiles = Array.prototype.slice.call(e.target.files)
    console.log(chosenFiles)
handleUploadFiles(chosenFiles);
  }
  return (
    <div>
        <h1>
        FileUpload
        </h1>
        <div>
        <input id='fileUpload' type='file'  multiple
        accept='application/pdf, image/png'
        onChange={HandleFiles}
        disabled={fileLimit}
/>
<label htmlFor='fileUpload'>
    <a className='btn btn-primary'> Upload Files </a>
</label>
<div>
    {
        uploadedFiles.map(file=>(
            <div>
                {file.name}
            </div>
        ))
    }
</div>
        </div>
    </div>
  )
}

export default FileUpload