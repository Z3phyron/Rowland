import React from 'react'
import styled from 'styled-components'
import {pageAnimation} from '../Anime'
import { motion } from 'framer-motion'
import { FaLink } from 'react-icons/fa'

const Assets = () => {
      

    return (
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
             <Wrapper>
            <div className="header">
                <h3>2. Assets()</h3>
            </div>
                <p>
                    Here are some of my latest works
                </p>
                <WorkBox>


                <div class="card">
                    <div class="types">
                        <span>React</span>
                    </div>
                   <div class="main-text">
                    <h2 class="heading">GitCall</h2>
                    <p class="dsc">A github profile finder</p>
                   </div>
                    <div class="btn-grp">
                        <a href="https://eloquent-saha-138d10.netlify.app/" class="cta link">
                            <FaLink />
                        </a>
                    </div>
                </div>

                <div class="card">
                    <div class="types">
                        <span>html</span>
                    </div>
                   <div class="main-text">
                    <h2 class="heading">Colr</h2>
                    <p class="dsc">A color pallete picker</p>
                   </div>
                    <div class="btn-grp">
                        <a href="https://colr.vercel.app/index.html" class="cta link">
                            <FaLink />
                        </a>
                    </div>
                </div>

                <div class="card">
                    <div class="types">
                        <span>React</span>
                    </div>
                   <div class="main-text">
                    <h2 class="heading">Tgra_phics</h2>
                    <p class="dsc">Tgraphics is a portfolio i made and designed for a friend.</p>
                   </div>
                    <div class="btn-grp">
                        <a href="https://tgra-phics.vercel.app/" class="cta link">
                            <FaLink />
                        </a>
                    </div>
                </div>
                
                <div class="card">
                    <div class="types">
                        <span>React</span>
                    </div>
                   <div class="main-text">
                    <h2 class="heading">Tudu</h2>
                    <p class="dsc">A todo App</p>
                   </div>
                    <div class="btn-grp">
                        <a href="https://tudu-ebon.vercel.app/" class="cta link">
                            <FaLink />
                        </a>
                    </div>
                </div>

                <div class="card">
                    <div class="types">
                        <span>Html</span>
                    </div>
                   <div class="main-text">
                    <h2 class="heading">Floop</h2>
                    <p class="dsc">An ecormmerce site's Landing page</p>
                   </div>
                    <div class="btn-grp">
                        <a href="https://floop.vercel.app/" class="cta link">
                            <FaLink />
                        </a>
                    </div>
                </div>

            </WorkBox>
            </Wrapper>
            
        </motion.div>
    )
}

const Wrapper = styled.div`
    padding: 40px 100px;
    color:#00f0b5;
margin-top: 10vh;
.header {
    letter-spacing: 2px;
font-size: 20px;
font-weight: 400;
}
@media (max-width: 768px) {
            padding: 40px 20px;
         }
`;


const WorkBox = styled.div`
padding: 5vh auto;
display: flex;
justify-content: center;
flex-wrap: wrap;


          
.card {
  width: 300px;
  height: 250px;
  background: #00000011;
  color:#00f0b5;
  border-radius: 20px;
  padding: 20px;
  position: relative;
    box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.333);
    margin: 30px;
    @media (max-width: 768px) {
        width: 250px;
        height: 200px;
         }

}

.types {
  position: absolute;
  top: 20px;
  left: 20px;

  @media (max-width: 768px) {
    top: 10px;
  left: 20px;
         }
}

.types span {
  background: #0000003c;
  padding: 7px 12px;
  border-radius: 8px;
  font-family: "Poor Story";
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-right: 10px;

  @media (max-width: 768px) {
    padding: 7px 12px;
    font-size: 10pt;
  text-transform: uppercase;
  margin-bottom: 30px;
         }
}

.main-text {
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  font-family: "Poppins";
}

.heading {
  font-size: 26pt;
  margin-bottom: 10px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 20pt;
    margin-bottom: 5px;
         }
}

.dsc {
  font-size: 10pt;
  margin-bottom: 10px;
  font-weight: 300;

  @media (max-width: 768px) {
        font-size: 10pt;
    }
}

.btn-grp .link {
  position: absolute;
  bottom: 10px;
  right: 20px;
  
  padding: 5px 10px;
  border-radius: 5px;
  color:#00f0b5;
}
`;

export default Assets
