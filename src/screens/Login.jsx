import TopNavbar from "../components/Nav/TopNavbar";
import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Login() {
  return (
    <>

      <TopNavbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="pt-[80px] min-h-screen"
             >


        <Wrapper id="contact" className="min-h-full">
          <div className="lightBg min-h-full">
            <div className="container">
              <HeaderInfo>
                <motion.h1
                  className="font40 extraBold"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Log In
                </motion.h1>
                <motion.p
                  className="font13"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                >
                  Welcome back! Log in to your account to access all features and manage your preferences effortlessly.
                  <br />
                  If you don’t have an account yet,
                  <RouterLink to={'/signup'} className="font-bold mx-1">
                    sign up
                  </RouterLink>
                  today and start your journey with us.
                </motion.p>
              </HeaderInfo>
              <div className="row" style={{ paddingBottom: "30px" }}>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
                  <Form>
                    <motion.label
                      className="font13"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Email:
                    </motion.label>
                    <input type="text" id="email" name="email" className="font20 extraBold" />

                    <motion.label
                      className="font13"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      Password:
                    </motion.label>
                    <input type="password" id="password" name="password" className="font20 extraBold" />
                  </Form>
                  <SumbitWrapper className="flex">
                    <ButtonInput type="submit" value="Log In" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                  </SumbitWrapper>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </motion.div>

    </>
  );
}



const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  text-align: center;
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  margin: auto;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
