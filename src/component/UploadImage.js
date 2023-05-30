import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FileUploader } from "react-drag-drop-files";
import Segment from "./Segment";
import Button from "./Button";

const fileTypes = ["JPG", "PNG", "GIF"];

function UploadImage() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  const [isUpload, setIsUpload] = useState();
  console.log(file);

  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
      <Segment
        className="upload-file d-flex align-items-center justify-content-center"
        style={{
          background: "#EEEEEE",
          height: "200px",
          borderRadius: "5px",
          border: "dashed",
          borderColor: "#D0D0D0",
          cursor: "pointer",
        }}
      >
        {file ? (
          <img
            style={{
              width: "100%",
              height: "200px",
              objectFit: "contain",
            }}
            src={URL.createObjectURL(file)}
          />
        ) : (
          <i class="fa-regular fa-image fa-2xl"></i>
        )}
      </Segment>
      {/* {file ? (
        <Button
          className="btn btn-success mt-4"
          style={{ width: "100%" }}
          onClick={() => navigate("/tiket")}
        >
          Upload
        </Button>
      ) : (
        <Button
          className="btn btn-success mt-4"
          style={{ width: "100%" }}
          disabled={true}
        >
          Upload
        </Button>
      )} */}
    </FileUploader>
  );
}

export default UploadImage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FileUploader } from "react-drag-drop-files";
// import Segment from "./Segment";
// import Button from "./Button";

// const fileTypes = ["JPG", "PNG", "GIF"];

// function UploadImage() {
//   const navigate = useNavigate();
//   const [file, setFile] = useState(null);
//   const handleChange = (file) => {
//     setFile(file);
//   };
//   const [isUpload, setIsUpload] = useState();
//   //   console.log(file);
//   //       useEffect(() => {
//   //         console.log(data, "ini data");
//   //         if (file && file) setIsUpload(data.price * 7);
//   //       }, [data, setTotal]);
//   //     console.log(file, "ini file");
//   return (
//     <Segment
//       style={{ width: "100%" }}
//       className="upload-file d-flex flex-column align-items-center justify-content-center"
//     >
//       <FileUploader
//         className="upload-img"
//         handleChange={handleChange}
//         name="file"
//         types={fileTypes}
//         style={{ width: "100%" }}
//       >
//         <Segment
//           className="upload-file d-flex align-items-center justify-content-center"
//           style={{
//             width: "auto",
//             background: "#EEEEEE",
//             height: "200px",
//             borderRadius: "5px",
//             border: "dashed",
//             borderColor: "#D0D0D0",
//             cursor: "pointer",
//           }}
//         >
//           {file ? (
//             <img
//               style={{
//                 width: "100%",
//                 height: "200px",
//                 objectFit: "contain",
//               }}
//               src={URL.createObjectURL(file)}
//             />
//           ) : (
//             <i class="fa-regular fa-image fa-2xl"></i>
//           )}
//         </Segment>
//       </FileUploader>
//       {file ? (
//         <Button
//           className="btn btn-success mt-4"
//           style={{ width: "100%" }}
//           onClick={() => navigate("/tiket")}
//         >
//           Upload
//         </Button>
//       ) : (
//         <Button
//           className="btn btn-success mt-4"
//           style={{ width: "100%" }}
//           disabled={true}
//         >
//           Upload
//         </Button>
//       )}
//     </Segment>
//   );
// }

// export default UploadImage;
