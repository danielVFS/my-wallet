import React, { useCallback } from 'react';
import { FaPlusCircle } from 'react-icons/fa'
import { useDropzone } from 'react-dropzone';

import './styles.css';

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      <p>
        <FaPlusCircle />
      </p>
    </div>
  )
}

export default Dropzone;