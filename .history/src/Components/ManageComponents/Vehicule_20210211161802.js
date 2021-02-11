import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core'
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Button } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyle = makeStyles((theme) => ({
    card: {
        background: 'white',
        width: '50%',
        height: '50%',
        margin: 50
    },
    media: {
        width: '100%',
        height: '100%'
    },
    switch: {
        display: 'flex',
        justifyContent: 'space-between'
    }
}))
export default function Vehicule() {
    const classes = useStyle();
    const [dataVehicule, setDataVehicule] = useState([]);
    const [isChecked, setIsChecked] = useState(true);

    const id = 1
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('http://localhost:8080/vehicule/' + id)
            setDataVehicule(request.data)

        }
        fetchData()
    }, [])
    console.log(dataVehicule)
    
        setIsChecked(dataVehicule.available)
    
    return (
        <Card className={classes.card}>
            <CardHeader
                // title={dataVehicule.map((item) => (
                //     <>
                //         {item.id == 1 ? item.marque + " " + item.modele : null}
                //     </>
                // ))}
                subheader="Vehicule Brand"
            />
            <CardMedia>
                <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" className={classes.media}></img>
            </CardMedia>
            <CardContent>
                <Typography>

                </Typography>
            </CardContent>
            <CardActions className={classes.switch}>
                <FormGroup row>
                    <FormControlLabel
                        control={<Switch
                            checked = {isChecked}
                            // onChange={checked} 
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
                <Button>
                    Delete this car
                </Button>
            </CardActions>
        </Card>
    )
}
