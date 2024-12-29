import React from 'react';                         

const IsLoading = ({text}) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-4 rounded shadow-lg flex items-center gap-2">
                <div className="loader" />
                <span>{text}</span>
            </div>
        </div>
    )
}

export default IsLoading; 
// fi-br-closed-captioning-slash menu-bar text-blue-950 text-2xl font-light