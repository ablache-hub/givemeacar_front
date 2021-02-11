import React from 'react'
import { makeStyles } from '@material-ui/core'


const useStyle = makeStyles((theme) => ({
    paper: {
        width: '50%',
    },
}))

export default function Manage() {
    const classes = useStyle();
    return (
        <Paper className={classes.paper}>

            
        </Paper>
    )
}
