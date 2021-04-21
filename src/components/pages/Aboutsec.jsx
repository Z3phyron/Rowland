import React from 'react'
import styled from 'styled-components'
import {pageAnimation} from '../Anime'
import { motion } from 'framer-motion'

const Aboutsec = () => {


    return (
        <div>


            <Skills exit="exit" variants={pageAnimation} initial="hidden" animate="show">
            
            <div className="wrapper">
            <div className="header">
                <h3>2. About me()</h3>
            </div>
            <p>
                A Front End Web Developer based in Lagos, Nigeria. I have over one year of experience in writing maintainable and functional code, following best practices, and building websites.
            </p>
            <p>
                i'm a software Enginerring student at NIIT, where i plan on studying more to help build my career.</p>
            <p>                 
                Adept knowledge in building robust RESTful APIs, dashboards, API Integrations. I value teamwork and respect everyone’s opinion.
            </p>
                <ul className="skills">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Wordpress</li>
                    <li>Git</li>
                    <li>Elementor</li>
                    <li>Sass</li>
                    <li>Gsap</li>
                    <li>Bootstrap</li>
                </ul>
            <p> At my leisure time I research, read comics, and learn new technologies, as well as latest development in tech.
</p>
            </div>
        </Skills>
        </div>
    )
}

const Skills = styled(motion.div)`
padding: 20px 20px;
    margin-top: 10vh;
    color:#00f0b5;
    .wrapper {
        padding: 40px 50px;

        .header {
            letter-spacing: 2px;
            font-size: 20px;
            font-weight: 400;
        }
        p {
            line-height: 150%;
            word-spacing: 2px;
            letter-spacing: 0.1rem;
            font-weight: 300;
        }

        @media (max-width: 768px) {
            padding: 40px 20px;
         }
        
        .skills {
            
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            li {
                margin: 20px;
                border: 1px solid #00f0b5;
                padding: 5px 15px;
                border-radius: 10px;
            }
        }
    }
`;

export default Aboutsec
