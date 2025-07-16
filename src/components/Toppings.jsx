
const Toppings = ({addBase, pizza}) => {
    let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];
    return (
        <div>
            <ul>
                {
                    toppings.map((elem,index)=>{
                    let spanClass = pizza.base === elem ? 'active' : '';
                    return (
                        <li key={elem+index}>
                            <span className={spanClass}>{elem}</span>
                        </li>
                    )}
                    )
                }
            </ul>
            <button>
                Order
            </button>
        </div>
    )
}

export default Toppings