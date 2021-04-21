import React, { useState } from 'react'
import logo from '../images/Logo.svg'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'


const Nav = () => {
    const [IsActive, SetIsActive] = useState(false)

    const handleClick = () => {
        SetIsActive(!IsActive)
    }
    return (
        <Container className="navbar-container">

            <div className="wrapper">
            <NavLink to='/' className="logo">
                <Logo src={logo} alt=""/>
            </NavLink>

            

            <Menu className={IsActive ? 'active' : ''}>

                

                <ListItem className="nav-item">
                    <NavLink to='/about' onClick={handleClick}>
                        .About()
                    </NavLink>
                </ListItem>

                <ListItem className="nav-item">
                    <NavLink to='/assets' onClick={handleClick}>
                        .Assets()
                    </NavLink>
                </ListItem>

                <ListItem className="nav-item">
                    <NavLink to='/contact' onClick={handleClick}>
                        .Contact()
                    </NavLink>
                </ListItem>

            </Menu>
            </div>

            <Toggle className={IsActive ? 'active' : ''} onClick={handleClick}>
                <div id="bar-1" className="bar"></div>
                <div id="bar-2" className="bar"></div>
            </Toggle>
        </Container>
    )
}

const Container = styled.div`
    padding: 10px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    background: #262626;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    font-family: 'Nunito';

    .wrapper {
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: space-between;
        overflow: hidden;
        width: 100%;

        @media (max-width: 848px) {
        overflow: visible;
        }
    }

    @media (max-width: 768px) {
        padding: 10px 20px;
    }
`;


const Logo = styled.img`
    width: 50px;
    z-index: -1;
`;

const Menu = styled.div`
        margin-right: -2000px;
        transition: .7s;

        &.active {
            margin-right: 0;
            
            }

@media (max-width: 848px) {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 30%;
        padding:10vh 30px;
        background: #262626;

        &.active {

        }
    }

    @media (max-width: 648px) {
        position: absolute;
        top: 0;
        right: 0;
        height: 100vh;
        width: 50%;
        padding:10vh 30px;
        background: #323232;

        &.active {

        }
    }


    
`;

const ListItem = styled.div`
    display: inline-block;
    margin-left: 30px;

    @media (max-width: 848px) {
        display: block;
        margin: 5vh auto;

        &.nav-cta {
            text-align: center;
            margin: 10px auto;
            
        }
    }

    &.nav-cta {

        a {
            border: 1px solid #fff;
            padding: 5px 15px;
            border-radius: 5px;
            
        }
    }

    a {
        color:#00f0b5;
        letter-spacing: 3px;

        &:hover {
            transition: .3s;
            color: #4f514f;
        }

        &.active {
            color: #4f514f;
        }
    }
`;

const Toggle = styled.div`
    width: 50px;
    height: 25px;
    margin-left: 30px;
    
   

    @media (max-width: 768px) {
        display: block;
        z-index: 2;
        width: 35px;
        height: 30px;
    }

    .bar {
        width: 100%;
        height: 3px;
        background: #00f0b5;
        display: block;
        border-radius:8px;
        transition: 1s;
    }

    #bar-1 {
        transform: translateY(px);
    }
    #bar-2 {
        transform: translateY(15px);
    }
    


    &.active #bar-1 {
        transform: translateY(10px) rotate(225deg);
    }

    &.active #bar-2 {
        transform: translateY(6px) rotate(-225deg);
    }


    
`;


export default Nav
