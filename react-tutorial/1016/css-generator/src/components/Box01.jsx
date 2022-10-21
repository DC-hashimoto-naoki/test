import styled from "styled-components";

function Box01(props){
    console.log(props)
    return(
        <>
            <StyledDiv width={props.width} border={props.border}></StyledDiv>
        </>
    )
}

export default Box01;

const StyledDiv = styled.div`
    height: 100px;
    width: ${props => props.width * 2}px;
    border: ${props => props.border}px solid #000;
`