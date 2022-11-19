import styled from 'styled-components'
import tw from 'twin.macro'


export const HeroContainer = styled.div`
width:300px;

${tw`flex flex-col items-center p-3 border-4 rounded-lg`}
`
export const HeroIcon = styled.div`
width:80px;
height:80px;
border-radius:40px;
background-color:blue;
color:white;
${tw`flex justify-center items-center mb-3`}
`

export const HeroHeader = styled.h3`
  ${tw`text-center  font-bold mb-2`};
`

export const HeroContent = styled.h3`
  ${tw`text-center  font-extralight`};
`