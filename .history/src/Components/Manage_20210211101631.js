import React from 'react'
import {Card,Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    card:{
        background: 'purple',
        width: '50%',
        height: '50%'
    }
}))

export default function Manage() {
    const classes = useStyle(); 
    return (
        <Card className={classes.card}>
            <Typography>Bonjour</Typography>
        </Card>
    )
}
