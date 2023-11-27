import DestinationImage from "../assets/images/Destionation1.png"

const Destinations = () => {
    return (
        <>
            <div className="mt-20">
                <div>
                    <h4 className='font-bold text-[#5E6282] text-center uppercase poppins'>Category</h4>
                    <h1 className='text-5xl text-center my-5 headingfont text-[#14183E]' >We Offer Best Services</h1>
                </div>
                <div>
                    <div>
                        <img src={DestinationImage} alt="DestinationImage"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Destinations