import React from 'react'

//backgrouund image
import Office from '../../assets/office_2.jpg'

//icons 
import {HiArrowLongRight} from 'react-icons/hi2'

import {ActionContainer, 
    ActionItem, 
    BackgroundImage, 
    ActionContent, 
    ActionTitle, 
    ButtonArea, 
    Button} from './styles'
const Index = () => {
  return (
   <ActionContainer>
    <BackgroundImage src={Office} alt='office' />
    <ActionItem>
        <ActionTitle>
            IT Solutions for your business
        </ActionTitle>
        <ActionContent>
           Engage your customers and build a better business
            through inuitive websites and mobile applications.
        </ActionContent>
        <ButtonArea>
            <Button>
                <h6>Learn more</h6>
                <HiArrowLongRight />
            </Button>
            <Button>
                <h6>Get In touch</h6>
                <HiArrowLongRight />
            </Button>
        </ButtonArea>
    </ActionItem>
   </ActionContainer>
  )
}

export default Index