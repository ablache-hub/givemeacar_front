import React from 'react'
import { makeStyles } from '@material-ui/core'
import {Paper } from '@material-ui/core'
import Vehicule from '../Components/ManageComponents/Vehicule'
import User from '../Components/ManageComponents/User'


const useStyle = makeStyles((theme) => ({
    paper: {
        width: '50%',
    },
}))

export default function Manage() {
    const classes = useStyle();
    return (
        <Paper className={classes.paper}>
            <Vehicule/>
        </Paper>
    )
}
