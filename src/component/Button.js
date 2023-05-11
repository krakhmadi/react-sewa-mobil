import React from 'react';


const Button = ({ children, ...props }) => {
    return (
        <button style={{ marginTop:"8px", marginBottom:"8px", borderRadius:"4px" }} {...props}>{children}</button>
    )
}

export default Button
