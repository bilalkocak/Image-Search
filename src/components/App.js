import React from 'react';
import Home from './Home/Home'
import Error from './Error'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (

        <Router>
            <Switch>
                <Route path="/" exact render={
                    () => {
                        return (<Home/>)
                    }
                }/>
                <Route path="/search" exact render={
                    () => {
                        return (
                            <h1>Yükleniyor</h1>
                        )
                    }
                }/>
                <Route component={Error}/>
            </Switch>
        </Router>


    );
}

export default App;
