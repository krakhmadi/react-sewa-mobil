import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Segment from "./Segment";

const fileTypes = ["JPG", "PNG", "GIF"];

function UploadImage() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
        <Segment className="upload-file d-flex align-items-center justify-content-center" 
                style={{
                    background: "#EEEEEE",
                    height: "162px",
                    borderRadius: "5px",
                    border: "dashed",
                    borderColor: "#D0D0D0"}}>
            <i class="fa-regular fa-image fa-2xl"></i>
        </Segment>
    </FileUploader>
  );
}

export default UploadImage;