import React from 'react'

const CustomButton = ({ onClick, title }) => {
    return (
        <div>
            <button type="button" className='rounded-lg border-black border-2 px-6 py-1 hover:bg-blue-300 transition-all' onClick={onClick}>{title ? title : 'Button'}</button>
        </div >
    )
}

export default CustomButton
