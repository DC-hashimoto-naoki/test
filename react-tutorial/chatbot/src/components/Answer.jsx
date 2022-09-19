import React from "react";
import Stack from '@mui/material/Stack';
import { makeStyles, createStyles } from "@mui/material";
import Button from '@mui/material/Button';

const useStyles = makeStyles(() => {
    createStyles({
        "button": {
            borderColor: '#FF549',
            color: '#FFB549',
            fontWeight: 600,
            marginBottom: '8px',
            "&:hover": {
                backgroundColor: '#FFB549',
                color: '#fff'
            }
        }
    })
})

const Answer = (props) => {
    const classes = useStyles();

    return (
        <Stack direction="column">
            <Button
                className={classes.button}
                variant="outlined" onClick={() => props.select(props.content, props.nextId)}
            >
                {props.content}
            </Button>
        </Stack>
    )
}

export default Answer;