import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

import { SiMongodb } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNode } from "react-icons/fa"; // Corrected

import { motion } from "framer-motion";
import { track } from "framer-motion/client";

import { SiOracle } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { TbBrandCpp } from "react-icons/tb";
import { ImHtmlFive } from "react-icons/im";
import { SiMysql } from "react-icons/si";



const iconVariants = (duration) => ({
    initial: {y: -10},
    animate:{
        y: [10 ,-10],
        transition: {
            duration : duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-8-- pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <motion.div 
        whileInView={{opacity:1  , x: 0 }}
        initial={{opacity : 0 , x: -100 }}
        transition={{duration: 1.5 }}
        
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.4)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FcLinux className="text-7xl text-cyan-400"  />
            </motion.div>
             <motion.div 
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"
             
             
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiOracle  className="text-7xl "  />
            </motion.div>
            <motion.div 
            variants={iconVariants(3.2)}
            initial="initial"
            animate="animate"
            
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className="text-7xl   text-green-500" />
            </motion.div>
            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <ImHtmlFive className="text-7xl text-green-500"  />
            </motion.div>
            <motion.div 
            variants={iconVariants(4.2)}
            initial="initial"
            animate="animate"
            
            
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-red-700"  /> 
            </motion.div> 
        </motion.div>
    </div>
  )
}

export default Technologies