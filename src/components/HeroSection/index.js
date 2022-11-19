import React from 'react'

//styles
import {SectionConatiner,SectionHeader, HeroItemsContainer} from './styles'
//icons
import {HiArrowLongRight} from 'react-icons/hi2'
//additional component
import Hero from './Hero'
import { Button } from '../Action/styles'

//data
import { services } from '../../assets/data'

const Index = () => {
  return (
    <SectionConatiner>
    <SectionHeader>
      Our Services
    </SectionHeader>
{/* services */}
<HeroItemsContainer>
  {services.map((service, idx)=><Hero key={idx} {...service} />)}
  
</HeroItemsContainer>
<div className='flex mt-5 items-center justify-center w-6/6'>
    <Button>
     <h6> See More Services</h6>
      <HiArrowLongRight />
    </Button>
</div>
  
    </SectionConatiner>
  )
}

export default Index