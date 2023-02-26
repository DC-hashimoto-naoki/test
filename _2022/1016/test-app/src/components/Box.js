import styled from 'styled-components';
function Box(){
    return (
        <StyledBox>
            this is Box01
        </StyledBox>
    )
}

const StyledBox = styled.div`
    font-size: 5em;
    font-weight: bold;
    color: tomato;
`

export default Box;