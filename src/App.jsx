import Home from './components/Home'
import { Route, Routes, useLocation } from 'react-router'
import Base from './components/Base.jsx'
import Order from './components/Order.jsx'
import Toppings from './components/Toppings.jsx'
import { useState } from 'react'
import Index from './components/Index.jsx'
import { AnimatePresence } from 'framer-motion'

function App() {
    const location= useLocation()
    const [pizza, setPizza] = useState({base:'', toppings:[]})
    
    const addBase=(base)=>{
        setPizza({...pizza, base})
    }
    
    const addTopping=(name)=>{
        let newTopping;

        if(!pizza.toppings.includes(name))
        {
            newTopping = [...pizza.toppings, name]
        }
        else
        {
            newTopping = pizza.toppings.filter(item=> item!==name)
        }
        setPizza({...pizza, toppings:newTopping})
    }  
    return (
        <AnimatePresence>
            <Routes location={location} key={location.key}>
                <Route element={<Home/>}>
                    <Route index element={<Index/>}/>
                    <Route path='/base' element={<Base addBase={addBase} pizza={pizza}/>}/>
                    <Route path='/add-toppings' element={<Toppings addTopping={addTopping} pizza={pizza}/>}/>
                    <Route path='/order' element={<Order pizza={pizza} />}/>
                </Route>            
            </Routes>
        </AnimatePresence>
    )
}

export default App
