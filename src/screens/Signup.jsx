import TopNavbar from "../components/Nav/TopNavbar";
import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <TopNavbar />
            <Wrapper id="contact">
                <div className="lightBg">
                    <div className="container">
                        <HeaderInfo>
                            <h1 className="font40 extraBold">Sign Up</h1>
                            <p className="font13">
                                Welcome to our platform! Create an account to unlock exclusive features and personalize your experience.
                                <br />
                                If you already have an account,
                                <RouterLink to={'/login'} className="font-bold mx-1">
                                    log in
                                </RouterLink>
                                to continue your journey with us.
                            </p>
                        </HeaderInfo>
                        <div className="row" style={{ paddingBottom: "30px" }}>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
                                <Form>
                                    <div className="grid md:grid-cols-2 gap-2">
                                        <div>
                                            <label className="font13">First Name:</label>
                                            <input type="text" id="fname" name="fname" className="font20 extraBold" />

                                        </div>
                                        <div>

                                            <label className="font13">Last Name:</label>
                                            <input type="text" id="lname" name="lname" className="font20 extraBold" />
                                        </div>

                                    </div>
                                    <label className="font13">Email:</label>
                                    <input type="text" id="email" name="email" className="font20 extraBold" />
                                    <label className="font13">Password:</label>
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

        </>
    );
}



const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  text-align: center;
  margin-top: 20px;
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
