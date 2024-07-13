import React from "react"; 
import { FaFacebook,FaGoogle,FaInstagram,FaPhone,FaTelegram } from "react-icons/fa";
import {FaMapLocation} from "react-icons/fa6"
import {motion} from "framer-motion"
import CreditCard from '../../assets/website/credit-cards.webp'

const Footer = () => {
  return <div className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
<div className="container">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {/* Company details section */}
          <div className="space-y-6">
            <motion.h1
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1}}
             transition={{type:"spring",stiffness:100,damping:10,delay:.4}}
            className="text-3xl font-bold uppercase">Coders Cafe</motion.h1>
            <motion.p
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1}}
             transition={{type:"spring",stiffness:100,damping:10,delay:.6}}
            className="text-sm max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod similique veritatis necessitatibus voluptatibus quisquam? Nemo alias perspiciatis culpa maiores asperiores?</motion.p>
            <div>
              <motion.p
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.8}}
              className="flex items-center gap-2">
                <FaPhone/>
                +91 **********
              </motion.p>
              <motion.p
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.8}}
              className="flex items-center gap-2 mt-2">
                  {" "}
                  <FaMapLocation/> Delhi, India
              </motion.p>
            </div>
          </div>
      {/* Footer links section */}
      <div className="space-y-6">
          <motion.h1
           initial={{opacity:0,scale:0}}
           whileInView={{opacity:1,scale:1}}
           transition={{type:"spring",stiffness:100,damping:10,delay:.2}}
          className="text-3xl font-bold ">Quick Links</motion.h1>
          <div className=" grid grid-cols-2 gap-3">
                {/* First cal Section */}
                <div>
                  <ul className="space-y-2">
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.2}}
                    >Home</motion.li>
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.3}}
                    >About</motion.li>
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.4}}
                    >Contact us</motion.li>
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.5}}
                    >Privacy Policy</motion.li>
                  </ul>
                </div>
                {/* Sec cal Section */}
                <div>
                  <ul className="space-y-2">
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.6}}
                    >Home</motion.li>
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.7}}
                    >About</motion.li>
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.8}}
                    >Contact us</motion.li>
                    <motion.li
                     initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.9}}
                    >Privacy Policy</motion.li>
                  </ul>
                </div>
          </div>
      </div>
      {/* Social links section */}
        <div className="space-y-6">
            <motion.h1
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1}}
             transition={{type:"spring",stiffness:100,damping:10,delay:.4}}
            className="text-3xl font-bold">Social Links</motion.h1>
            <motion.div
             initial={{opacity:0,scale:0}}
             whileInView={{opacity:1,scale:1}}
             transition={{type:"spring",stiffness:100,damping:10,delay:.6}}
            className="flex items-center gap-3 ">
              <FaFacebook className="text-3xl hover:scale-105 duration-300 cursor-pointer"/>
              <FaInstagram className="text-3xl hover:scale-105 duration-300 cursor-pointer"/>
              <FaTelegram className="text-3xl hover:scale-105 duration-300 cursor-pointer"/>
              <FaGoogle className="text-3xl hover:scale-105 duration-300 cursor-pointer"/>
            </motion.div>
            <div>
              <motion.h1
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.8}}
              className="text-xl mb-2 font-semibold">Payment Method</motion.h1>
              <motion.img
               initial={{opacity:0,scale:0}}
               whileInView={{opacity:1,scale:1}}
               transition={{type:"spring",stiffness:100,damping:10,delay:.9}}
              src={CreditCard} className="w-[80%]" alt="" />
            </div>
        </div>
  </div>
        {/* Footer copyright section */}
        <motion.p
         initial={{opacity:0,x:100}}
         whileInView={{opacity:1,x:0}}
         transition={{type:"spring",stiffness:100,damping:10,delay:.8}}
        className="text-white text-center mt-8 pt-8 border-t-2">
          Copyright &copy; 2024 Company Name. All right reserved. 
        </motion.p>
</div>
  </div>;
};

export default Footer;
