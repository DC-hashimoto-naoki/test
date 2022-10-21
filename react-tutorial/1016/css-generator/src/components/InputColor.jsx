import { useState } from 'react';
import styled from 'styled-components';
import Box01 from './Box01';
import Code from './Code';
import Icon from './Icon';

function InputColor() {
    const [width, setWidth] = useState(100);
    const [color, setColor] = useState("#000");
    const [border, setBorder] = useState(0);


    return (
        <>
            <div>InputColor</div>
            <input type="color" onChange={(event) => { setColor(event.target.value) }}></input>
            <StyledBox width={width} color={color} onClick={() => { setWidth(width + 10); setBorder(border + 2) }}></StyledBox>
            <Box01 width={width} border={border} />
            <Code color={color} />
            <Icon />
            <input accept="image/png, image/jpeg" type="file" onChange={(event) => console.log(event.target.value)} ></input>
        </>
    )
}

export default InputColor;



const StyledBox = styled.div`
    width: ${props => props.width}px;
    height: 50px;
    background-color: ${props => props.color};
    margin: auto;
`