import React from 'react'
import { Card, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    card: {
        background: 'purple',
        width: '50%',
        height: '50%'
    }
}))

export default function Manage() {
    const classes = useStyle();
    return (
        <Paper>

            <Card className={classes.card}>
                <Typography>Bonjour</Typography>
            </Card>
        </Paper>
    )
}
