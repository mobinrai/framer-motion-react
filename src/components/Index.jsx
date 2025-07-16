import React from 'react'
import { Link } from 'react-router'
import Button from './shared/Button'
import {motion} from 'framer-motion'
const Index = () => {
    return (
        <div className='flex flex-col gap-10 items-center'>
            <motion.h3 animate={{fontSize:50, color:'#ff2994'}} className='font-quicksand text-white text-6xl'>Welcome to Pizza Joint</motion.h3>
            <Button href={'/base'} text={'Create pizza'}/>
        </div>
    )
}

export default Index