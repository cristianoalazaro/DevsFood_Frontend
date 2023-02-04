import styled from "styled-components";

export const Container = styled.div`
background-color: #136713;
border-radius: 10px;
padding: 20px;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Logo = styled.img`
height: 70px;
width: auto;
`

export const SearchInput = styled.input`
width: ${props => props.active ? '300px' : '0' };
height: 50px;
border-radius: 25px;
outline: 0;
border: 0;
background-image: url('/assets/search.png');
background-size: 30px;
background-repeat: no-repeat;
background-position: 10px;
padding-left: 50px;
transition: all ease .4s;
cursor: pointer;
font-size: 15px;

&:focus {
    cursor: text;
}
`