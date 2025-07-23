import { motion } from 'framer-motion';

const parentVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition: { delay:1, duration: 1 }
    },
    exit:{
        x:'-100vw',
        transition:{duration: 1,ease:'easeInOut'}
    }
}

const Div = ({children}) => {
    return (
        <motion.div initial="hidden" animate="visible" variants={parentVariants} exit="exit" className='flex flex-col gap-10'>
            {children}
        </motion.div>
    )
}

export default Div