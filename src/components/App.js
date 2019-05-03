import React from 'react';
import Home from './Home/Home'
import Error from './404/Error'
import SearchResult from './ResultPage/SearchResult/SearchResult'
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
                <Route path="/search/:query/:collection" exact component={SearchResult}/>
                <Route component={Error}/>
            </Switch>
        </Router>


    );
}

export default App;
