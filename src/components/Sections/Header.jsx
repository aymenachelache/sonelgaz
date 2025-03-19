import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.svg";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";

export default function Header() {
  return (




    <div id="home" className="container flexSpaceCenter pt-20 w-full min-h-[840px] lg:flex-row flex-col">
      <div className="flexCenter w-1/2 h-full max-lg:w-full max-lg:order-2 max-lg:my-12 max-lg:text-center max-md:my-[80px_0_50px_0]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="extraBold font60">We are Digital Agency.</motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font13 semiBold text-center max-w-full lg:text-left lg:max-w-[470px] pt-[15px] pb-[50px] leading-6 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
          </motion.div>

          <div className="max-w-[190px] max-lg:mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <FullButton title="Get Started" />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full max-lg:w-full max-lg:order-1 max-lg:mt-8">
        <div className="flex justify-end relative z-[9] max-lg:w-full max-lg:justify-center">
          <img src={HeaderImage} className="w-[426px] h-[607px] rounded-lg max-w-none max-md:w-[80%] max-md:h-auto" alt="office" style={{ zIndex: 9 }} />


          <div className="flexCenter darkBg radius8 absolute left-0 bottom-[50px] max-w-[330px] p-[30px] z-[99] max-lg:left-[20px] max-md:bottom-[-50px]">
            <div className="absolute left-[-20px] top-[-10px]">
              <QuotesIcon />
            </div>
            <div>
              <p className="font15 whiteColor">
                <em>Friends, such as we desire, are dreams and fables. Friendship demands the ability to do without it.</em>
              </p>
              <p className="font13 orangeColor textRight" style={{ marginTop: '10px' }}>Ralph Waldo Emerson</p>
            </div>
          </div>
          <div className="absolute right-[-100px] bottom-[100px] z-[2] max-lg:right-[100px] max-md:hidden">
            <Dots />
          </div>
        </div>
        {/* <div className="lightBg w-[30%] h-[700px] absolute top-0 right-0 z-0 max-lg:hidden"></div> */}
      </div>
    </div>
  );
}










