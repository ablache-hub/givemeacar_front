import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core'
import { Paper, Grid, Card, CardHeader } from '@material-ui/core'
import Vehicule from '../Components/ManageComponents/Vehicule'
import User from '../Components/ManageComponents/User'
import axios from 'axios'


const useStyle = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        padding: 50
    },
}))

export default function Manage() {
    const classes = useStyle();




    return (
        <Paper className={classes.paper}>
            <Grid container direction="column" spacing={3} justify='center'>
                <Vehicule />
            </Grid>
        </Paper>
    )
}
