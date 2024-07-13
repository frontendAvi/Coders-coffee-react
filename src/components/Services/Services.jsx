import React from "react";
// import {delay, motion} from 'framer-motion'
import Coffee1 from '../../assets/coffee/coffee1.png'
// import Coffee2 from '../../assets/coffee/coffee2.png'
import Coffee3 from '../../assets/coffee/coffee3.png'
import { easeInOut } from "framer-motion/dom";
import {motion} from 'framer-motion'

const serviceData = [
  {
    id: 1,
    image:Coffee1,
    title: "Coffee Tasting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in consequat nunc."
  },
    {
    id: 2,
    image: Coffee3,
    title: "Coffee Selection",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in consequat nunc."
  },
    {
    id: 3,
    image: Coffee1,
    title: "Coffee Extras",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in consequat nunc."
  },

]



const Services = () => {
  return <div className="container my-16 space-y-4" >
      {/* Header section */}
      <div className="text-center max-w-lg mx-auto space-y-2">
        <motion.h1
         initial={{opacity:0, scale:.5}}
         animate={{opacity:1,scale:1}}
         transition={{type:"spring",stiffness:100, damping:10,delay:0.4}}
        className="text-3xl font-bold  text-lightGray">
          Fresh and <span className="text-primary">Tasty coffee</span>
        </motion.h1>
        <motion.p 
         initial={{opacity:0, scale:.5}}
         animate={{opacity:1,scale:1}}
         transition={{type:"spring",stiffness:100, damping:10,delay:0.6}}
        className="text-sm opacity-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio reiciendis nemo ullam obcaecati ducimus id. Cumque rerum ipsum accusantium quod!</motion.p>
      </div>
      {/* card Section */}
       <div 
  
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {serviceData.map((service)=>(
    <motion.div

    initial={{opacity:0, }}
           animate={{opacity:1,scale:1}}
           transition={{type:"spring",stiffness:100, damping:10,delay:0.8}}
    className="text-center p-4 space-y-6">
        <img src={service.image} alt="" className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer" />
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary">{service.title}</h1>
          <p className="text-darkGray">{service.description}</p>
        </div>
    </motion.div>  
  ))
      
  }
  </div>

  </div>;
};

export default Services;
