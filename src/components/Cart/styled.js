import styled from "styled-components";

export const CartArea = styled.div`
background-color: #136716;
border-top-left-radius: 10px;
border-top-right-radius: 10px;
position: fixed;
bottom: 0;
right: 30px;
padding: 5px;
`

export const CartHeader = styled.div`
height: 50px;
width: 290px;
display: flex;
align-items: center;
cursor: pointer;
`

export const CartIcon = styled.img`
width: 23px;
height: auto;
margin: 0 10px;
`

export const CartText = styled.div`
color: #FFF;
font-size: 17px;
flex: 1;
`

export const CartDown = styled.img`
width: 20px;
`
export const CartBody = styled.div`
display: ${props => props.show ? 'block' : 'none'};
color: #FFF;
transition-delay: 1s;
`

export const ProductsArea = styled.div`

`

export const ProductsItem = styled.div`
display: flex;
margin: 10px;
`

export const ProductsPhoto = styled.img`
width: 64px;
height: auto;
border-radius: 10px;
`

export const ProductsInfoArea = styled.div`
flex: 1;
margin-left: 10px;
`

export const ProductsName = styled.div`
font-size: 15px;
font-weight: bold;
`

export const ProductsPrice = styled.div`
font-size: 13px;
`

export const ProductsQuantityArea = styled.div`
display: flex;
align-items: center;
`

export const ProductsQtIcon = styled.img`
width: 13px;
height: auto;
cursor: pointer
`

export const ProductsQtText = styled.div`
margin: 0 5px;
font-size: 13px;
font-weight: bold;
`
