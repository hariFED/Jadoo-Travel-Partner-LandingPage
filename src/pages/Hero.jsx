import Navbar from "../components/Navbar"
import { motion } from "framer-motion"
import SVGComponent from "../components/SvgComponent"


const Hero = () => {
    return (
        <>

            <div className={`bg-image h-screen`}>
                <div className="hidden sm:block">
                    <Navbar />
                </div>
                <div className="flex items-center justify-center sm:h-[86.2vh] sm:px-48 sm:mt-14 sm:flex-row flex-col">
                    <div className="flex items-center justify-center h-full sm:justify-start sm:w-1/2">
                        <div className="flex flex-col gap-12">

                            <h2 className="sm:text-2xl font-bold text-[#F1765D]">BEST DESTINATONS AROUND THE WORLD</h2>

                            <motion.div animate={{ x: 0, y: 0 }} initial={{ x: -1000 }} transition={{ duration: 0.8, delay: 0.5 }}>
                                <h1 className="sm:text-8xl text-4xl headingfont text-[#181E4B] leading-12">Travel, <span className="bg-[url('../assets/Decore.svg')]"> enjoy </span><br />
                                    and live a new <br />
                                    and full life
                                </h1>
                            </motion.div>

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
                    <div className="hidden sm:w-1/2 sm:block">
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