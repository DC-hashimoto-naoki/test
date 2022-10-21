import { useState } from 'react';
import styled from 'styled-components';
import icon from '../icon.svg'
import Svg from './Svg';

function Icon() {
    const [fill, setFill] = useState("#000");

    return(
        <>
            <StyledImg src={icon} onClick={()=> setFill("#00aabb") } />
            <Svg fill={fill} />
        </>
    )
}

export default Icon;

const StyledImg = styled.img`
    display: block;
    width: 100px;
`