import React from 'react'

//styles
import {OfferContainer, DivOne, DivTwo, DivThree, OfferTitle, OfferContent} from './styles'


const Index = ({idx, title, desc}) => {
  return (
    <OfferContainer>
        <DivOne>0{idx}</DivOne>
        <DivTwo></DivTwo>
        <DivThree>
            <OfferTitle>
                {title}
            </OfferTitle>
            <OfferContent>
            {desc}
            </OfferContent>
        </DivThree>
    </OfferContainer>
  )
}

export default Index