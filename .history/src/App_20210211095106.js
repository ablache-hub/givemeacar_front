import Interface from './Pages/ManagerInterface'
import {Grid} from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Grid container spacing={3} style={{ height: '100%' background: 'black'}}>
                <Grid item item lg={2} md={2} sm={2} xs={1} style={{background: 'red'}}></Grid>
                <Grid item item lg={8} md={8} sm={8} xs={10} style={{background: 'blue'}}>
                    <Switch>
                        <Route path="/" component={Interface} />
                    </Switch>
                </Grid>
                <Grid item item lg={2} md={2} sm={2} xs={1} style={{background: 'green'}} ></Grid>
            </Grid>
        </Router>
    );
}

export default App;
