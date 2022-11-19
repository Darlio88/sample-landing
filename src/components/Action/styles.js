import styled from 'styled-components'
import tw from 'twin.macro'

export const ActionContainer = styled.section`
width:100%;

${tw`relative `}
`


export const BackgroundImage = styled.img`
width:100%;
height:100%;
opacity:0.6;
`

export const ActionItem = styled.div`
height:400px;
width:320px;
top:40vh;
left:40vw;
z-index:1;

${tw`absolute space-y-2`}
`

export const ActionTitle = styled.h1`
text-align: center;
${tw`text-2xl font-bold `}
`
export const ActionContent = styled.p`
${tw`text-lg font-thin `}
`

export const ButtonArea = styled.div`
${tw`flex justify-between mt-2`}
`

export const Button = styled.button`
background-color:blue;
color:white;
${tw`px-3 py-2 text-sm font-semibold rounded-lg flex justify-between space-x-2 items-center`}
`