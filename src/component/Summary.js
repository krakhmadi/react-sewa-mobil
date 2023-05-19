import React from 'react';


const Summary = ({ label, p, ...props }) => {
    return (
        <div className="form-group col-md-3 d-flex" style={{ gap:"8px", flexDirection:'column', marginTop:"8px", marginBottom:"8px" }}>
            <label className='paragraph-summary'>{label}</label>
            <p className='detail-paragraph-summary' style={{color: "#8A8A8A"}}>{p}</p>
        </div>
    )
}
export default Summary;