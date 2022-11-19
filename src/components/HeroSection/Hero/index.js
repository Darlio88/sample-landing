import React from 'react'
import {HeroContainer, HeroContent, HeroIcon, HeroHeader} from './styles'

//icons 
import {MdOutlineDesktopWindows} from 'react-icons/md'
import {FiSmartphone} from 'react-icons/fi'
import {IoLaptopOutline} from 'react-icons/io5'
import { Button } from '../../Action/styles'

const Index = ({icon, title, desc}) => {
  return (
   <HeroContainer>
    <HeroIcon>
     {icon=== "MdOutlineDesktopWindows" && <MdOutlineDesktopWindows size={48} />}
     {icon=== "IoLaptopOutline" && <IoLaptopOutline size={48} />}
     {icon=== "FiSmartphone" && <FiSmartphone size={48} />}
    </HeroIcon>
    <HeroHeader>
       {title}
    </HeroHeader>
    <HeroContent>
     {desc}
    </HeroContent>
 
   </HeroContainer>
  )
}

export default Index