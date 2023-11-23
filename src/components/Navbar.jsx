import Logo from '../assets/Logo.svg'

const Navbar = () => {
    return (
        <>
            <div className='sticky flex items-center justify-between px-48 pt-5 text-base bg-transparent sansfont'>
                <div className=''>
                    <img src={Logo} alt='Logo' />
                </div>
                <div>
                    <ul className='flex flex-row items-center space-x-16 cursor-pointer'>
                        <li className='p-4 duration-300 ease-in border-b-2 border-transparent ease hover:border-black'>Desitnations</li>
                        <li className='p-4 duration-300 ease-in border-b-2 border-transparent ease hover:border-black'>Hotels</li>
                        <li className='p-4 duration-300 ease-in border-b-2 border-transparent ease hover:border-black'>Flights</li>
                        <li className='p-4 duration-300 ease-in border-b-2 border-transparent ease hover:border-black'>Bookings</li>
                        <li className='p-4 duration-300 ease-in border-b-2 border-transparent ease hover:border-black'>Login</li>
                        <li className='px-8 py-2 duration-300 border-2 border-black rounded-xl hover:scale-110 hover:bg-white'><button className=''>Sign Up</button></li>
                        <li className='p-4 duration-300 ease-in border-b-2 border-transparent ease hover:border-black'>EN</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar