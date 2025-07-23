import { motion } from 'framer-motion';
import Button from './shared/Button';
import { Link } from 'react-router';
import Div from './shared/Div';

const childVariants={
    hidden:{
        x:'-100vw'
    },
    visible:{
        x:0,
        transition:{duration:0.9}
    }
}

const Base = ({addBase, pizza}) => {
    const bases=['Cheese', 'Thin & Crispy', 'Thick Crust']
    return (
            <Div>
                
            <h3 className='page-header'>Step 1: Choose your base</h3>
            <ul className='flex flex-col gap-6'>
                {
                    bases.map((elem,index)=>{
                    let spanClass = pizza.base === elem ? 'text-3xl text-black' : 'text-2xl';
                    let activeIcon = pizza.base === elem ? '>':'-';
                    return (
                        <motion.li key={elem+index} onClick={()=>addBase(elem)}
                        whileHover={
                            {
                                scale:1.1,
                                color:'#f8e112',
                                originX:0
                        }}
                        transition={{type:'spring', stiffness:300}}
                        className='cursor-pointer  text-white'>
                            <span className=" mr-2">{activeIcon}</span><span className={`${spanClass} font-quicksand`}>{elem}</span>
                        </motion.li>
                    )}
                    )
                }
            </ul>
            <Button href={'/'} text={'Back to Home'}/>
            {
                pizza.base &&
                (
                    <motion.div variants={childVariants}  className='flex'>
                        <Link to={'/add-toppings'} className='btn rounded-full text-white w-44 text-lg'>
                            <motion.button className='inline-block rounded-full w-full py-1 cursor-pointer'
                            whileHover={{
                                color:'#f8e112',
                                textShadow:"0px 0px 8px rgb(255,255,255)",
                                boxShadow:"0px 0px 8px rgb(255,255,255)"
                            }}>
                                Next
                            </motion.button>
                        </Link>
                    </motion.div>
                )
            }
        </Div>
    )
}

export default Base