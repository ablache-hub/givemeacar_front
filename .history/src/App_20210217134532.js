import Interface from './Pages/ManagerInterface'
import Vehicule from './Components/ManageComponents/Vehicule'
import {Grid} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Grid container spacing={3} style={{background: 'black'}}>
                <Grid item item lg={1} md={1} sm={1} xs={1} style={{background: 'red', padding:0}}></Grid>
                <Grid item item lg={10} md={10} sm={10} xs={10} style={{background: 'blue', padding:0, overflow:'hidden'}}>
                    <Switch>
                        <Route path="/" component={Interface} />
                    </Switch>
                </Grid>
                <Grid item item lg={1} md={1} sm={1} xs={1} style={{background: 'green', padding: 0}} ></Grid>
            </Grid>
        </Router>
    );
}

export default App;
