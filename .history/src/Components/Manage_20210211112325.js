import React from 'react'
import { Card, CardHeader, CardContent, CardMedia, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    paper: {
        width: '50%',
    },
    card: {
        background: 'purple',
        width: '50%',
        height: '50%'
    },
    media:{
        width: 200,
        height: 200
    }
}))

export default function Manage() {
    const classes = useStyle();
    return (
        <Paper className={classes.paper}>

            <Card className={classes.card}>
                <CardHeader
                title="Vehicule Name"
                subheader="Vehicule Brand"
                />
                <CardMedia>
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" className={classes.media}></img>
                </CardMedia>
                
            </Card>
        </Paper>
    )
}
