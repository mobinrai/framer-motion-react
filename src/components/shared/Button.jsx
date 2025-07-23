import React from 'react'
import { Link } from 'react-router'
import { delay, hover, motion, scale } from 'framer-motion';

const buttonVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:1.2,
            duration:1
        }
    },
    hover:{
        scale:1.1,
        color:'#f8e112',
        textShadow:"0px 0px 8px rgb(255,255,255)",
        boxShadow:"0px 0px 8px rgb(255,255,255)",
        transition: {
            duration: 0.5,
            // how many times we want to repeat the animation
            repeat: Infinity,
            repeatType: "reverse", // or "mirror"
            ease: "easeInOut"
        }
    }
}

const Button = ({href, text}) => {
    return (
        
            <motion.button variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover" className='btn text-white rounded-full w-44 text-lg cursor-pointer'>
                <Link to={href} className=''>
                    {text}
                </Link>
            </motion.button>
    )
}

export default Button