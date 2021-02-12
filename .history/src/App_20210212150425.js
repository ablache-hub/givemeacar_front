import Interface from './Pages/ManagerInterface'
import {Grid} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Grid container spacing={3} style={{ width:'100vw', height: '100vh', background: 'black'}}>
                <Grid item item lg={1} md={1} sm={1} xs={1} style={{background: 'red'}}></Grid>
                <Grid item item lg={10} md={10} sm={10} xs={10} style={{background: 'blue'}}>
                    <Switch>
                        <Route path="/" component={Interface} />
                    </Switch>
                </Grid>
                <Grid item item lg={1} md={1} sm={1} xs={1} style={{background: 'green'}} ></Grid>
            </Grid>
        </Router>
    );
}

export default App;
