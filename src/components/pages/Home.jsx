import React from 'react'
import styled from 'styled-components'
import Damian from '../images/Damian.png'
import {pageAnimation} from '../Anime'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


const Home = () => {
    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
        
        <StyledAbout>
            
            <div className="wrapper">
                <h5>
                    <span className="hide">
                        Hi,i am
                    </span>
                </h5>
                <h2>
                    <span className="hide">
                        Rowland Ricketts
                    </span>
                </h2>
                <h4>
                    <span className="hide">
                    I’M A FRONTEND ENGINEER AND UI DEVELOPER
                    </span>
                </h4>
                    
                    <Link to='/assets' className='cta'>
                        View Projects
                    </Link>
            </div>
            <div className="image-box">
                <img src={Damian} alt=""/>
            </div>
        </StyledAbout>

        
        
        </motion.div>
    )
}











const StyledAbout = styled.div`
    margin-top: 10vh;
    padding: 10vh 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80vh;
    color:#00f0b5;
    
    
    @media (max-width: 1190px) {
        padding: 10vh 20px;
        text-align: center;
        justify-content: center;
        flex-direction: column-reverse;
       
    }

    .wrapper {

        h5, h4, h2 {
            overflow: hidden;
            word-spacing: 2px;
            letter-spacing: 0.1rem;
        }


        @media (max-width: 768px) {
            
        }

        h5 {
            margin-bottom: 15px;
            span {
                font-size: 16pt;
                font-weight: 200;
                @media (max-width: 768px) {
                    font-size: 14pt;
                    }
            }
        }
        h2 {
            margin-bottom: 15px;

            span {

                
                font-family: 'Nunito';
                font-size: 30pt;
                font-weight: 600;
                @media (max-width: 768px) {
                    font-size: 20pt;
                }
            }
        }
        h4 {
            margin-bottom: 3vh;

            span {
                font-size: 18pt;
                font-weight: 400;
                @media (max-width: 768px) {
                    font-size: 14pt;
                 }
            }
        }
        

        .cta {
            
            background: transparent;
            border: 1px solid #00f0b5;
            padding: 5px 15px;
            font-size: 14pt;
            text-transform: capitalize;
            border-radius: 10px;
            color:#00f0b5;
            transition: .3s;

            &:hover {
                background: #00f0b5;
                color: #fff;
            }

        }
        
    }

    .image-box {
        width: 400px;
        height: 400px;
        margin: auto;
        background-color: #334b45;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        @media (max-width: 1190px) {
        padding: 10vh 20px;
        text-align: center;
        justify-content: center;
        margin: 5vh auto;
       
    }

        @media (max-width: 1150px) {
            width: 350px;
            height: 350px;

            img {
                width: 100px;
            }
        }

        @media (max-width: 768px) {
            width: 200px;
            height: 200px;

            img {
                width: 20px;
            }
        }

        img { 
            width: 200px;
            @media (max-width: 768px) {
            width: 100px;
           
        }
        }
    }
`;



export default Home
