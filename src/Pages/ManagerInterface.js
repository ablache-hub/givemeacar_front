import React, {useState, useEffect} from 'react'
import axios from "axios";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    listItemText: {
        fontSize: '0.6em',
    },
    list: {
        border: '2px solid'
    }
});

const OrangeTextTypography = withStyles({
    root: {
        color: "#ff7b00",
        textAlign: "center",
        marginBottom: '-10px'
    }
})(Typography);

const BorderedList = withStyles({
    root: {
        borderColor: 'gray',
        border: "1px solid",
        borderRadius: '5px'
    }
})(List);

export default function ManagerInterface() {
    const classes = useStyles();

    const managerId = 1;
    let print = "";
    const [dataAgence, setDataAgence] = useState([]);
    const [dataManager, setDataManager] = useState([]);


    useEffect(() => {

        async function fetchData() {
            const response = await axios.get('http://localhost:8080/utilisateur/' + managerId + '/agence');
            setDataAgence(response.data)
            const response2 = await axios.get('http://localhost:8080/utilisateur/' + managerId);
            setDataManager(response2.data);
        }

        fetchData();

    }, []);


    console.log(dataAgence);
    // console.log(dataAgence.clientele);

    // if (error) {
    //     return <div>Erreur : {error.message}</div>;
    // } else if (!isLoaded) {
    //     return <div>Chargement...</div>;
    // } else {
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent>
                    <OrangeTextTypography gutterBottom variant="h5" component="h2">
                        Agence de {dataAgence.localisation}
                    </OrangeTextTypography>
                </CardContent>

                <CardMedia
                    component="img"
                    alt="Infos Manager"
                    height="140"
                    image="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png"
                    title="Contemplative Reptile"
                />

                <CardContent>
                    <OrangeTextTypography gutterBottom variant="h5" component="h2">
                        {dataManager.firstName + ' ' + dataManager.name}
                    </OrangeTextTypography>
                </CardContent>


                <CardContent>
                    <Typography>
                        Clientèle
                    </Typography>
                    <BorderedList component="nav" aria-label="main mailbox folders">
                        {/* Comme "dataAgence" est initialisé à vide, "clientele" est initialement vu comme "undefined"
                        ce qui déclenche une erreur, avec un if on y fait appel seulement quand il est populated */}
                        {
                            (dataAgence.clientele) ?
                                dataAgence.clientele.map((current) =>
                                    <ListItemText
                                        classes={{primary: classes.listItemText}}
                                        primary={current.firstName + ' ' + current.name}
                                    />)
                                : void 0
                        }
                    </BorderedList>
                </CardContent>

                <CardContent>
                    <Typography>
                        Etat du stock
                    </Typography>
                    <BorderedList component="nav" aria-label="main mailbox folders">
                        <ListItemText
                            classes={{primary: classes.listItemText}}
                            primary={'Vehicules en stock: ' + dataAgence.nombreVehicules}
                        />
                        <ListItemText
                            classes={{primary: classes.listItemText}}
                            primary={'Vehicules disponibles: ' + dataAgence.vehiculeDispo}
                        />
                        <ListItemText
                            classes={{primary: classes.listItemText}}
                            primary={'Vehicules en revision: ' + dataAgence.vehiculeRevision}
                        />
                    </BorderedList>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>

    )
        ;
}



