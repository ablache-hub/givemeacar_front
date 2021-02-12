import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Button, Grid } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyle = makeStyles((theme) => ({
    card: {
        background: 'white',
        width: '100%',
        height: '100%',

    },
    media: {
        width: '100%',
        height: '100%'
    },
    switch: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    button: {
        background: 'red',
        color: 'white',
        margin: 'auto'
    }
}))
export default function Vehicule(props) {
    const classes = useStyle();
    const { marque, modele } = props;
    // const [dataVehicule, setDataVehicule] = useState([]);
    // const [isChecked, setIsChecked] = useState(false);

    // const id = 1
    // useEffect(() => {
    //     async function fetchData() {
    //         await axios.get('http://localhost:8080/vehicule/')
    //         .then((res) => {
    //             setDataVehicule(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(message = "il y'a une erreur" + err)
    //         })

    //     }
    //     fetchData()
    // }, [])
    // console.log(dataVehicule)

    // useEffect(() => {
    //     setIsChecked(dataVehicule.available)
    //     console.log(isChecked)
    // }, [])

    // const handleChange = (event) => {
    //     setIsChecked({...isChecked, [event.target.name]: event.target.checked });
    //     console.log(isChecked)

    //   };


    return (
        
            <Grid item style={{  flexBasis:'unset' }} lg={8}>

                <Card className={classes.card}>
                    <CardHeader
                        title={marque}
                        subheader={modele}
                    />
                    <CardMedia>
                        <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" className={classes.media}></img>
                    </CardMedia>
                    <CardContent>
                        <Typography>
                            Description du véhicule
                </Typography>
                    </CardContent>
                    <CardActions className={classes.switch}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Switch
                                    // checked={isChecked}
                                    // value={isChecked}
                                    // onChange={handleChange} 
                                    name="checkedA" />
                                }
                                label="Disponible"
                            />
                            <FormControlLabel
                                control={
                                    <Switch
                                        // checked={dataVehicule.map((item => (
                                        //     <>
                                        //         {item.id == 1 ? item.inRevision : !item.inRevision}
                                        //     </>
                                        // )))}
                                        // onChange={checked}
                                        name="checkedB"
                                        color="primary"
                                    />
                                }
                                label="En révision"
                            />
                        </FormGroup>
                    </CardActions>
                    <CardActions>
                        <Button className={classes.button} variant="contained">
                            Delete this car
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
    )
}
