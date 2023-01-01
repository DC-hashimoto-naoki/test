
import { FC } from 'react';
import styled from 'styled-components';


type ButtonProps = {
    color?: string
}

const StyledButton = styled.button<ButtonProps>`
    font-size: 24px ;
    padding: 2rem;
    color: ${({color}) => color};
    margin-top: 8em;
`

const Button:FC<ButtonProps> = (props: ButtonProps) => {
    console.log(props)
    return (
        <>
            <StyledButton>
                送信ボタン
            </StyledButton>
        </>
    )
}


export default Button;