import React, { useState } from "react";

const Button = (props) => {
    const [open, setOpen] = useState(false);

    const toggleBtn = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <button onClick={toggleBtn}>
            {props.button}{open ? 'open' : 'close'}
        </button>
    )
}

export default Button;