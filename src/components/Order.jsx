import {motion} from 'framer-motion'
import Button from './shared/Button'

const Order = ({pizza}) => {
    return (
        <div className='flex flex-col gap-8 -mt-40'>
            <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:1.4}} className='text-white text-2xl'>
                You have ordered a {pizza.base} pizza with {pizza.toppings.join(",")}.
            </motion.p>
            <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2, duration:1.4}} className='text-yellow-600 text-3xl font-quicksand'>
                Thank you for your order.
            </motion.h3>
            <Button href={'/'} text={'Back to Home'}/>
        </div>
    )
}

export default Order