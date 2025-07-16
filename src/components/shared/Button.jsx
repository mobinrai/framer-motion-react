import React from 'react'
import { Link } from 'react-router'

const Button = ({href, text}) => {
    return (
        <Link to={href} className='btn rounded-full text-white w-44 text-lg'>
            <button className='inline-block w-full py-1 cursor-pointer'>
                {text}
            </button>
        </Link>
    )
}

export default Button