import React from 'react'

//styles 
import {OffersContainer,SectionHeader,OfferItemsContainer} from './styles'

//offers
import Offer from './Offer'

//data for offers
import { offers } from '../../assets/data'
const Index = () => {
  return (
    <OffersContainer>
    <SectionHeader>
      Why Choose Us
    </SectionHeader>
    {/* offers */}
    <OfferItemsContainer>
        {
          offers.map((offer, idx)=><Offer key={idx} idx={idx+1} {...offer}/>)
        }
        
    </OfferItemsContainer>
    </OffersContainer>
  )
}

export default Index