import styled from 'styled-components';

const Box01 = () => {
    return (
        <StyledBox className="box">BOX</StyledBox>
    )
}

const StyledBox = styled.div`
    color: red;
    font-weight: bold;
    font-size: 2em;
`;

export default Box01;