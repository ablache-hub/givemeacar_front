import React from 'react'
import {Card,} from '@material-ui/core'
import {makeStyles} from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
    card:{
        background: 'purple',
    }
}))

export default function Manage() {
    const classes = useStyle(); 
    return (
        <Card className={classes.card}>
            
        </Card>
    )
}
