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
    const [dataVehicule, setDataVehicule] = useState([]);

    // Je récupère mes données et je les stock dans dataVehicule
    useEffect(() => {
        async function fetchData() {
            await axios.get('http://localhost:8080/vehicule/')
                .then((res) => {
                    setDataVehicule(res.data)
                })
                .catch((err) => {
                    console.log(err)
                })    
        }
        fetchData()
    }, [])
    console.log(dataVehicule)




    return (
        <Paper className={classes.paper}>
            <Grid container  direction="row" spacing={3} justify='center'>
                {dataVehicule.map((item, id) => (
                    // <Vehicule key={id} {...item} />
                    <Card>
                        <CardHeader
                        title={item.marque}
                        subheader={item.modele}
                        />
                    </Card>
                ))}
            </Grid>
        </Paper>
    )
}
