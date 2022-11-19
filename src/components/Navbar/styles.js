import styled from 'styled-components'
import tw from 'twin.macro'


export const NavContainer = styled.div`
display:flex;
align-items:center;
position:fixed;
top:0;
right:0;
z-index:10;
flex:1;
min-height: 10vh;
width:100vw;
${tw`px-8 py-1 bg-yellow-50`}
`

export const NavLeft = styled.div`
display:flex;
align-items:center;
flex:2;
${tw``}
`
export const Logo = styled.img`
width:32px;
`
export const NavRight = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
flex:3;
${tw``}
`

export const Links = styled.a`
${tw`text-xl font-normal`}
`