import React, {useCallback, useState } from 'react'
import {useDropzone} from 'react-dropzone'
import { FiUpload } from 'react-icons/fi'

import './styles.css';

interface Props {
    // quando se faz um setSelected de qualquer coisa de um estado (setSelectedFile) não tem retorno
    onFileUploaded: (file: File) => void; 
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  // estado para armazenar informações (url) da imagem em uma string vazia
  const [selectedFileUrl, setSelectedFileUrl] = useState('');

  // useCallback é para memorizar uma função para que ela seja recriada somente quando o valor de uma variável mudar
  const onDrop = useCallback(acceptedFiles => {
    // como é apenas um arquivo, vai estar sempre na posição 0 do vetor de arquivos aceitos
    const file = acceptedFiles[0];

    const fileUrl = URL.createObjectURL(file);

    setSelectedFileUrl(fileUrl);
    onFileUploaded(file);
  }, [onFileUploaded])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accept: 'image/png, image/jpeg'
    })

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/png, image/jpeg" />
      {  selectedFileUrl
           ?  <img src={selectedFileUrl} alt="Imagem do estabelecimento" />
           : (
                isDragActive ?
                <p><FiUpload /> Solte a imagem aqui ...</p> :
                <p><FiUpload /> Arraste e solte a imagem aqui ou clique para selecionar um arquivo.</p>
           )
      }
    </div>
  )
}

export default Dropzone;