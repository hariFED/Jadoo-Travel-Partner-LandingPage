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
                        <li className='p-4'>Desitnations</li>
                        <li className='p-4'>Hotels</li>
                        <li className='p-4'>Flights</li>
                        <li className='p-4'>Bookings</li>
                        <li className='p-4'>Login</li>
                        <li className='px-8 py-2 border-2 border-black rounded-xl'><button className=''>Sign Up</button></li>
                        <li className='p-4'>EN</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar