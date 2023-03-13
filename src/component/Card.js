import React from 'react';
const Card = (component) => {
    return (
        <div style={{
            borderRadius: "12px",
            background: "white",
            maxWidth: "500px",
            width: "100%",
            height: "150px",
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
        }}>
            {component.children}
        </div>
    )

}

export default Card