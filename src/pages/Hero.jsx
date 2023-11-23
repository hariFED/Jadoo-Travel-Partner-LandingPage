import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import SVGComponent from "../components/SvgComponent"


const Hero = () => {
    return (
        <>

            <div className={`bg-image h-screen`}>
                <div>
                    <Navbar />
                </div>
                <div className="flex items-center justify-center h-[86.2vh] px-48 mt-14">
                    <div className="flex items-center justify-start w-1/2 h-full">
                        <div className="flex flex-col gap-12">
                            <h2 className="text-2xl font-bold text-[#F1765D]">BEST DESTINATONS AROUND THE WORLD</h2>
                            <h1 className="text-8xl headingfont text-[#181E4B] leading-12">Travel, <span className="bg-[url('../assets/Decore.svg')]"> enjoy </span><br />
                                and live a new <br />
                                and full life
                            </h1>
                            <p className="text-lg font-medium leading-8 poppins">
                                Built Wicket longer admire do barton vanity itself do in it.<br />
                                Preferred to sportsmen it engrossed listening. Park gate <br />
                                sell they west hard for the.
                            </p>
                            <div className="flex gap-10 text-sm sansfont">
                                <button className="bg-[#F1A501] px-4 py-3 w-18 rounded-xl text-white ">Find our more</button>
                                <button className="bg-[#DF6951] px-4 py-3 w-18 rounded-xl text-white"><span className="px-2 play-icon"></span>Play Demo</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2">
                        <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{
                            duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]
                        }} >
                            <SVGComponent />
                        </motion.div>

                    </div>
                </div>
            </div>




        </>
    )
}

export default Hero