import styled from "styled-components";

function Box01(props){
    console.log(props.width)
    return(
        <>
            <StyledDiv width={props.width}></StyledDiv>
        </>
    )
}

export default Box01;

const StyledDiv = styled.div`
    height: 100px;
    width: ${props => props.width * 2}px;
    border: 1px solid #000;
`