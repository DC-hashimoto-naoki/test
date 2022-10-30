import React, { useRef } from 'react'

const InputText = (props) => {
    const inputElement = useRef(null);

    return (
        <div ref={inputElement}>InputText {props.value}</div>
    )
}

export default InputText