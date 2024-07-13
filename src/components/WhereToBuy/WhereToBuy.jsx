import React from "react";
import WorldMap from '../../assets/world-map.png'
import {motion} from 'framer-motion'

const WhereToBuy = () => {
  return <div className="container my-36">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {/* form section */}
          <div className="space-y-8">
              <motion.h1
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{type:"spring",stiffness:100,damping:10,delay:.4}}
              className="text-4xl font-bold text-darkGray font-serif">Buy Our Products From Anywhere</motion.h1>

               <motion.div 
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
                transition={{type:"spring",stiffness:100,damping:10,delay:.6}}
               className="flex items-center gap-4">
                <input type="text" placeholder="Name" className="input-style w-full lg:-[150px]" />
                <input type="email" placeholder="Email" className="input-style w-full" />
              </motion.div>

              <motion.div 
              initial={{opacity:0,scale:0}}
              whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.6}}
              className="flex items-center gap-4">
                <input type="text" placeholder="Country" className="input-style w-full " />
                
                <input type="text" placeholder="ZipCode" className="input-style w-full lg:-[150px]" />
              </motion.div>
              <motion.button
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.6}}
              className="primary-btn w-full">Order Now</motion.button>
          </div>
          {/* world map section */}
          <motion.div
           initial={{opacity:0,scale:0}}
           whileInView={{opacity:1,scale:1}}
           transition={{type:"spring",stiffness:100,damping:10,delay:1}}
          className="col-span-2 ">
                <img src={WorldMap} alt="" className="w-full  sm:w-[500x] mx-auto" />
          </motion.div>
        </div>
  </div>;
};

export default WhereToBuy;
