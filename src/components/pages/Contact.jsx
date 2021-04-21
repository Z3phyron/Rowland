import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {pageAnimation} from '../Anime'

const Contact = () => {
    return (
        <ContactPage variants={pageAnimation}  exit="exit" initial="hidden" animate="show"  >
            
            <SocialPage>

                <div className="text-box">
                    <p>
                        Having an existing project where you need some help?
                    </p>
                    <p>
                        I'm available for freelance work
                    </p>
                    <p>
                        Drop me a line if you fancy a chat
                    </p>
                </div>
               <Items>
               <div className="social-item">
                    <a href="https://www.linkedin.com/in/z3phyron/" className="icons">
                        <FaLinkedinIn/>
                    </a>
                 </div>   
                <div className="social-item">
                    <a href="https://twitter.com/damian_ricketts" className="icons">
                        <FaTwitter/>
                    </a>
                 </div>   
                <div className="social-item">
                    <a href="https://github.com/Z3phyron" className="icons">
                        <FaGithub/>
                    </a>
                 </div> 
               </Items> 
               <div className="email">
                    <a href="mailto:z3phyrondevs@gmail.com">@ Zephyrondevs@Gmail.com</a>
                </div>  
                   
            </SocialPage>
        </ContactPage>
    )
}

const ContactPage = styled(motion.div)`
    display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  color: #00F0B5;
  

`;
const SocialPage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
 
    align-items: center;
    height: 100%;

    .text-box {
        text-align: center;
        margin-bottom: 3vh;
        
        p {
            font-size: 20pt;
        }

        @media (max-width: 768px) {

        }

    }

    .email {
        a {
            color: #334b45;

    &:hover {
        color:#00f0b5;
        transition: .3s;
    }
 }
    }

`;

const Items = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
width: 30%;
  margin-bottom: 10vh;
 font-size: 30pt;
 

@media (max-width: 568px) {
    width: 70%;
    font-size: 20pt;
}

 a {
    color: #334b45;

    &:hover {
        transition: .3s;
        color: #00F0B5;
    }
 }

`;

export default Contact
