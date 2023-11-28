import DestinationImage from "../assets/images/Rome.jpg"
import DestinationImage2 from "../assets/images/London.jpg"
import DestinationImage3 from "../assets/images/Turkey.jpg"

const Destinations = () => {
    return (
        <>
            <div className="mt-20">
                <div>
                    <h4 className='font-bold text-[#5E6282] text-center uppercase poppins'>Category</h4>
                    <h1 className='text-5xl text-center my-5 headingfont text-[#14183E]' >We Offer Best Services</h1>
                </div>
                <div className="flex flex-col items-center justify-center py-24 sm:flex-row h-100 sm:space-x-28 space-y-28">
                    <div className="relative duration-300 shadow-2xl cursor-pointer sm:w-1/5 aspect-square rounded-3xl shadow-gray-500 hover:scale-110">
                        <img src={DestinationImage} alt="DestinationImage" className=" aspect-[2/3] object-cover rounded-3xl" />
                        <div className="absolute inset-x-0 bottom-0 w-full h-24 font-bold bg-white hover:text-black text-slate-400 poppins rounded-b-2xl">
                            <div className="flex items-center justify-between mx-5 mt-6 ">
                                <div>Rome, Italy</div>
                                <div>$5.42k</div>
                            </div>
                            <div className="mx-5 mt-2 ">
                                10 Days Trip
                            </div>

                        </div>
                    </div>
                    <div className="relative duration-300 shadow-2xl cursor-pointer sm:w-1/5 rounded-3xl shadow-gray-500 hover:scale-110">
                        <img src={DestinationImage2} alt="DestinationImage" className=" aspect-[2/3] object-cover rounded-3xl" />
                        <div className="absolute inset-x-0 bottom-0 w-full h-24 font-bold bg-white hover:text-black text-slate-400 poppins rounded-b-2xl">
                            <div className="flex items-center justify-between mx-5 mt-6 ">
                                <div>London, UK</div>
                                <div>$4.2k</div>
                            </div>
                            <div className="mx-5 mt-2 ">
                                6 Days Trip
                            </div>

                        </div>
                    </div>
                    <div className="relative duration-300 shadow-2xl cursor-pointer sm:w-1/5 rounded-3xl shadow-gray-500 hover:scale-110 ">
                        <img src={DestinationImage3} alt="DestinationImage" className=" aspect-[2/3] object-cover rounded-3xl" />
                        <div className="absolute inset-x-0 bottom-0 w-full h-24 font-bold bg-white hover:text-black text-slate-400 poppins rounded-b-2xl">
                            <div className="flex items-center justify-between mx-5 mt-6 ">
                                <div>Istanbul,Turkey</div>
                                <div>$6.83k</div>
                            </div>
                            <div className="mx-5 mt-2 ">
                                12 Days Trip
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinations