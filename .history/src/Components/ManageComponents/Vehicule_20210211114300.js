import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Card, CardHeader, CardContent, CardMedia, CardActions, Typography, Paper } from '@material-ui/core'
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const useStyle = makeStyles((theme) => ({
    card: {
        background: 'purple',
        width: '50%',
        height: '50%'
    },
    media: {
        width: '100%',
        height: '100%'
    }
}))
export default function Vehicule() {
    const classes = useStyle();

    return (
        <Card className={classes.card}>
            <CardHeader
                title="Vehicule Name"
                subheader="Vehicule Brand"
            />
            <CardMedia>
                <img src="https://www.sixt.fr/fileadmin/files/global/user_upload/fleet/png/350x200/audi-a1-sportback-gelb-2019.png" className={classes.media}></img>
            </CardMedia>
            <CardContent>
                <Typography>
                    Informations about Vehicule
            </Typography>
            </CardContent>
            <CardActions>
                <FormGroup row>
                    <FormControlLabel
                        control={<Switch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                        label="Secondary"
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.checkedB}
                                onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Primary"
                    />
                    <FormControlLabel control={<Switch />} label="Uncontrolled" />
                    <FormControlLabel disabled control={<Switch />} label="Disabled" />
                    <FormControlLabel disabled control={<Switch checked />} label="Disabled" />
                </FormGroup>
            </CardActions>
        </Card>
    )
}
