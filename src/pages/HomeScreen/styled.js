import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
padding: 15px;
color: #136713;
`;

export const CategoryArea = styled.div`
color: #FFF;
margin-top: 20px;
`

export const CategoryList = styled.div`
display: flex;
margin-top: 10px;
`
export const ProductArea = styled.div`
margin: 20px 10px 10px 10px;
`

export const ProductList = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 15px;
`

export const ProductPaginationArea = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`

export const ProductPaginationItem = styled.div`
background-color: ${props => props.active == props.current ? "#C0C0C0" : "#FFF"};
padding: 5px 10px;
cursor: pointer;
border-radius: 5px;
box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
margin-right: 10px;
`