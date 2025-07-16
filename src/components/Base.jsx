import Button from './shared/Button';

const Base = ({addBase, pizza}) => {
    const bases=['Cheese', 'Thin & Crispy', 'Thick Crust']
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='page-header'>Step 1: Choose your base</h3>
            <ul className='flex flex-col gap-6'>
                {
                    bases.map((elem,index)=>{
                    let spanClass = pizza.base === elem ? 'text-white' : 'text-gray-400';
                    let activeIcon = pizza.base === elem ? '>':'-';
                    return (
                        <li key={elem+index} onClick={()=>addBase(elem)} className='cursor-pointer'>
                            <span className="text-white mr-2">{activeIcon}</span><span className={`${spanClass} font-quicksand text-2xl`}>{elem}</span>
                        </li>
                    )}
                    )
                }
            </ul>
            <Button href={'/'} text={'Back to Home'}/>
            {
                pizza.base &&
                <div className='contents'>
                    <Button href={'/add-toppings'} text={'Next'}/>
                </div>
            }
        </div>
    )
}

export default Base