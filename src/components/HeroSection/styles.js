import styled from 'styled-components'
import tw from 'twin.macro'

export const SectionHeader = styled.h2`
text-align: center;
${tw`text-2xl mb-2 font-bold`}
` 

export const SectionConatiner = styled.section`
margin-top:2rem;
`
export const HeroItemsContainer = styled.div`
display:grid;
padding-left:2rem;
grid-template-columns: 1fr 1fr 1fr;
`