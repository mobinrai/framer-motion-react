import { Link, Outlet } from 'react-router'
import Header from './Header'
const Home = () => {
    return (
        <>
            <Header/>
            <main className='flex justify-center items-center min-h-screen'>
                <Outlet/>
            </main>
        </>
    )
}

export default Home