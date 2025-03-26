import { useState, useRef } from "react";

function TestCreate() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  }

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append('post[profile_picture]', selectedFile, selectedFile.name);

    fetch('http://localhost:3000/posts', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}

export default TestCreate;