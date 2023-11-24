
import Dish from '../assets/dish.svg';
import Flight from '../assets/flight.svg';
import Mic from '../assets/mic.svg';
import Setting from '../assets/setting.svg';




const Category = () => {
    return (
        <>
            <div className={`mt-24 bg-center bg-image-category  flex flex-col items-center`}>
                <div>
                    <h4 className='font-bold text-[#5E6282] text-center uppercase poppins'>Category</h4>
                    <h1 className='text-5xl text-center my-5 headingfont text-[#14183E]' >We Offer Best Services</h1>
                </div>
                <div className=''>
                    <div className="flex flex-col items-center my-20 space-y-10 sm:space-y-0 sm:space-x-40 sm:flex-row">
                        <div className='flex flex-col gap-5 p-10 text-center shadowDrop'>
                            <div className='flex items-center justify-center bg-top bg-no-repeat bg-contain bg-image-category-services '>
                                <img src={Dish} alt='calculated Weather' />

                            </div>
                            <div className='text-base font-semibold sansfont'>Calculated Weather</div>
                            <div className='font-medium text-center poppins text-[#5E6282] '>Bulit Wicker longer <br />admire dobarton <br />vanity itself do in it</div>
                        </div>
                        <div className='flex flex-col gap-5 p-10 text-center shadowDrop'>
                            <div className='flex items-center justify-center bg-top bg-no-repeat bg-contain bg-image-category-services'>
                                <img src={Flight} alt='calculated Weather' />

                            </div>
                            <div className='text-base font-semibold sansfont'>Best Flights</div>
                            <div className='font-medium text-center poppins text-[#5E6282] '>Bulit Wicker longer <br />admire dobarton <br />vanity itself do in it</div>
                        </div>
                        <div className='flex flex-col gap-5 p-10 text-center shadowDrop'>
                            <div className='flex items-center justify-center bg-top bg-no-repeat bg-contain bg-image-category-services'>
                                <img src={Mic} alt='calculated Weather' />

                            </div>
                            <div className='text-base font-semibold sansfont'>Local Events</div>
                            <div className='font-medium text-center poppins text-[#5E6282] '>Bulit Wicker longer <br />admire dobarton <br />vanity itself do in it</div>
                        </div>
                        <div className='flex flex-col gap-5 p-10 text-center shadowDrop'>
                            <div className='flex items-center justify-center bg-top bg-no-repeat bg-contain bg-image-category-services'>
                                <img src={Setting} alt='calculated Weather' />

                            </div>
                            <div className='text-base font-semibold sansfont'>Customization</div>
                            <div className='font-medium text-center poppins text-[#5E6282] '>Bulit Wicker longer <br />admire dobarton <br />vanity itself do in it</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category