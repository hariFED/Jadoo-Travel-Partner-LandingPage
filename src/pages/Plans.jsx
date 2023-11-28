import tumbnail1 from "../assets/images/Destination.svg";
import tumbnail2 from "../assets/images/Payment.svg";
import tumbnail3 from "../assets/images/Transport.svg";
import DesignMobile from "../assets/images/MobileAppDesign.jpg"

const Plans = () => {
    return (
        <>
            <div className="flex items-center justify-center h-[100vh] sm:p-52 sm:flex-row flex-col">
                <div className="flex items-center justify-center border-r-2 border-gray-600">
                    <div>
                        <p className="font-semibold text-[#5E6282] text-left uppercase poppins mb-2">Easy and Fast</p>
                        <div className="text-5xl   text-left my-2 headingfont text-[#14183E]">Book Your Next Trip<br /> In 3 Easy Steps</div>
                        <div className="flex flex-col gap-3 mt-8">
                            <div className="flex">
                                <img className="p-2" src={tumbnail1} alt="tumbnail" />
                                <div className="p-4">
                                    <p className="font-bold text-[#5E6282] text-left  poppins">Choose Destination</p>
                                    <p className="text-[#5E6282] poppins w-[60%] text-left">Dive into our diverse selection of destinations  for your next adventure.</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src={tumbnail2} alt="tumbnail" className="p-2" />
                                <div className="p-4">
                                    <p className="font-bold text-[#5E6282] text-left  poppins">Make Payment</p>
                                    <p className="text-[#5E6282] poppins w-[60%] text-left">Seal your adventure with a tap, let our secure payment be your travel map!</p>
                                </div>
                            </div>
                            <div className="flex">
                                <img src={tumbnail3} alt="tumbnail" className="p-2" />
                                <div className="p-4">
                                    <p className="font-bold text-[#5E6282] text-left  poppins">Reach Airport on Selected Date</p>
                                    <p className="text-[#5E6282] poppins w-[60%] text-left">Arrive at the airport on your selected date, your adventure we’ll help create!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div className="">
                    <div className="flex items-center justify-center ">
                        <img src={DesignMobile} alt="design" className="my-2 " />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Plans