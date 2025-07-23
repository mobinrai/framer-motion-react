import { motion } from "framer-motion";
import Button from "./shared/Button";
import Div from "./shared/Div";

const Toppings = ({addTopping, pizza}) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    return (
        <Div>
            <h3 className='page-header'>Step 1: Choose toppings</h3>
            <ul className="flex flex-col gap-4">
                {
                    toppings.map((elem,index)=>{
                    let spanClass = pizza.toppings.includes(elem) ? 'text-black text-3xl' : '';
                    return (
                        <motion.li key={elem+index} className='cursor-pointer  text-white text-2xl capitalize'
                        whileHover={{scale:1.1, originX:0, color:'#f8e112'}}
                        transition={{type:'spring', stiffness:300}}
                        onClick={()=>addTopping(elem)}>
                            <span className={spanClass}>{elem}</span>
                        </motion.li>
                    )}
                    )
                }
            </ul>
            {
                pizza.toppings.length>0 && 
                <p className="text-white">You have choosen following toppings: <br /> <span className="text-yellow-600">{pizza.toppings.join(', ')}</span> </p>
            }
            
            <Button href={'/'} text={'Back to Home'}/>
            <Button href={'/order'} text={'Order'}/>
        </Div>
    )
}

export default Toppings