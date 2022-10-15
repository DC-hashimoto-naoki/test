import styled from "styled-components";
import logo from '../img/logo.svg';

const Box02 = () => {
    return (
        <>
            <StyledBox className="box">BOX -02</StyledBox>
            <StyledImg src={logo}></StyledImg>
        </>
    )
}

const StyledBox = styled.div`
    color: blue;
    font-size: large;
    border: 1px solid black;
    width: 200px;
    margin: auto;
`

const StyledImg = styled.img`
    width: 100px;
`

export default Box02;