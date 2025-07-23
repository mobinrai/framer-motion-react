import Button from './shared/Button'
import {motion} from 'framer-motion'

const parentVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition: { delay:1.7, duration: 1 }
    },
    exit:{
        x:'-100vw',
        transition:{duration: 1,ease:'easeInOut'}
    }
}

const Index = () => {
    return (
        <motion.div variants={parentVariants} initial="hidden" animate="visible" exit="exit" className='flex flex-col gap-10 items-center'>
            <h3 className='font-quicksand text-white text-6xl'>Welcome to Pizza Joint</h3>
            <Button href={'/base'} text={'Create pizza'}/>
        </motion.div>
    )
}

export default Index