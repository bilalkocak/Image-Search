import React from 'react';
import Home from './Home/Home'
import Error from './404/Error'
import SearchResult from './ResultPage/SearchResult/SearchResult'
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';


class App extends React.Component {

    render() {

        return (

            <Router>
                <Switch>
                    <Route path="/" exact render={
                        () => {
                            return (<Home/>)
                        }
                    }/>
                    <Route path="/search/:query/:collection/:id" exact component={SearchResult}/>
                    <Route path="/search/:query/:collection" exact component={SearchResult}/>
                    <Route path={"/search/random"} exact component={SearchResult} />
                    <Route path={"/search//"} render={
                        () => {
                            return (<Redirect to={"/search/random"}/>)
                        }
                    }/>
                    <Route render={
                        () => {
                            return (<Error/>)
                        }
                    }/>
                </Switch>
            </Router>


        );
    }

}


export default App;
