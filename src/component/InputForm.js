import React from "react";

const InputForm = ({ label, ...props }) => {
  return (
    <div
      className="form-group d-flex"
      style={{
        gap: "8px",
        flexDirection: "column",
        marginTop: "8px",
        marginBottom: "8px",
      }}
    >
      <label className="title-form">{label}</label>
      <input {...props}></input>
    </div>
  );
};
export default InputForm;
