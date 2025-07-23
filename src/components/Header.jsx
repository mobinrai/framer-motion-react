import SiteLogo from '../assets/analytics.png'
import { motion } from 'framer-motion'

const headerHidden = {
        y:-100,
        opacity:0
}
const headerVisible = {
    y:0,
    opacity:1
}

const headerImageVariants={
    hidden:{
        ...headerHidden
    },
    visible:{
        ...headerVisible,
        transition:{ duration: 1 }
    }
}

const headerTextVariants={
    hidden:{
        ...headerHidden
    },
    visible:{
        ...headerVisible,
        transition:{ duration: 1.5 }
    }
}

const Header = () => {
    return (
        <header className='flex gap-6'>
            <motion.img variants={headerImageVariants} initial="hidden" animate="visible" src={SiteLogo} className='w-16'/>
            <motion.div variants={headerTextVariants} initial="hidden" animate="visible"  className='text-left border-b border-border-bottom-color w-full'>
                <h3 className='text-white text-4xl font-quicksand '>Pizza Joint</h3>
            </motion.div>
        </header>
    )
}

export default Header