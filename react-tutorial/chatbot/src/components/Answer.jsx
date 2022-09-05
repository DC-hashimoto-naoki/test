import React from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const Answer = (props) => {
    return (
        <Stack direction="column">
            <Button variant="contained" color="secondary" onClick={ () => props.select(props.content, props.nextId) } >
                {props.content}
            </Button>
        </Stack>
    )
}

export default Answer;