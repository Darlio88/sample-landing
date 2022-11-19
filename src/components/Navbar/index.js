import React from 'react'

import {NavContainer, NavLeft, NavRight, Logo, Links} from './styles'
import LogoImage from "../../assets/logos/logo-dark.png"

const Index = () => {
  return (
    <NavContainer>
        <NavLeft>
            <Logo src={LogoImage} alt='logo'  />
        </NavLeft>
        <NavRight>
           <Links href='/home'>Home</Links>
           <Links href='/about'>About us</Links>
           <Links href='/services'>Services</Links>
           <Links href='/contact'>Contact us</Links>
        </NavRight>
    </NavContainer>
  )
}

export default Index