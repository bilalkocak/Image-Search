import React from 'react';
import Home from './Home/Home'
import Error from './404/Error'
import SearchResult from './ResultPage/SearchResult/SearchResult'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";


class App extends React.Component{

    render(){

        return (

            <Router>
                <Switch>
                    <Route path="/" exact render={
                        () => {
                            return (<Home/>)
                        }
                    }/>
                    <Route path="/search/:query/:collection" exact component={SearchResult}/>
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

const mapStateToProps = state =>({
    search:state.search
});

export default connect(mapStateToProps)(App);
