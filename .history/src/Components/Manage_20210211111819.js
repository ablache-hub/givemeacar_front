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
    media: {
        height: 50,
        paddingTop: '56.25%', // 16:9
      },
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
                <CardMedia
                className={classes.media}
                image="../../public/vehicule.png"
                >
                    {/* <img src="../../public/vehicule.png" style={{height: 200, width: 200}}/> */}
                </CardMedia>
                
            </Card>
        </Paper>
    )
}
