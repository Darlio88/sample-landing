import tw from "twin.macro";
import styled from 'styled-components'


export const OfferContainer = styled.div`

${tw`flex space-x-2 items-start`}
`


export const DivOne = styled.div`
color:blue;
${tw`text-xl font-semibold`}
`

export const DivTwo = styled.div`
height:1px;
width:4rem;
background-color:black;
${tw`mt-3`}
`

export const DivThree = styled.div`
max-width:240px;
${tw`flex flex-col `}
`
export const OfferTitle = styled.h2`
text-align:start;
${tw` font-bold mb-3`};
`
export const OfferContent = styled.h3`
  ${tw` font-extralight`};
`