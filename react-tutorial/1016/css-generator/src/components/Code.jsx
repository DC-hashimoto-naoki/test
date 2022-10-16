import styled from "styled-components";

function Code(props){
    let count = 0
    let divCode = `<div>${props.color}</div>`
    return(
        <>
            <StyledCode>
                {divCode}
            </StyledCode>
        </>
    )
}

export default Code;

const StyledCode = styled.code`
    font-size: larger;
`