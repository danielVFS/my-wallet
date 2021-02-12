import React, { useCallback, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa'
import { useDropzone } from 'react-dropzone';

import './styles.css';
import { url } from 'inspector';

const Dropzone = () => {
  const [selectedFileUrl, setSelectedFileUrl] = useState('');
  
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0]; // um único arquivo

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} />
      { selectedFileUrl
        ? 
        <img src={selectedFileUrl} alt="Imagem da Moeda"/>
        :
        <p>
          <FaPlusCircle />
        </p>
      }
    </div>
  )
}

export default Dropzone;