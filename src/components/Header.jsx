import SiteLogo from '../assets/analytics.png'

const Header = () => {
    return (
        <header className='flex gap-4'>
            <img src={SiteLogo} className='w-10'/>
            <div className='text-left border-b border-white w-full'>
                <h3 className='pb-1 text-white text-2xl font-quicksand'>Pizza Joint</h3>
            </div>
        </header>
    )
}

export default Header