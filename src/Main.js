import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import PageTwo from './PageTwo';
import PageOne from './PageOne';
import MainPage from './MainPage';
import createHistory from 'history/createBrowserHistory';

export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentWillMount() {
        const history = createHistory();
        history.listen(this.yourHandler);
    }
    yourHandler = (location, action) => {
        var pathname = location.hash.substring(2);
        console.log("pathname", pathname);
        var screenName = pathname.substring(pathname.lastIndexOf("/") + 1, pathname.lastIndexOf(""));
        console.log("screenName", screenName);
    }

    render() {
        return (
            <Router>
                <div id='MainDiv' style={{ height: '100vh'}}>
                    <Switch>
                        <Route exact path="/" component={MainPage} />
                        <Route exact path="/PageOne" component={PageOne} />
                        <Route exact path="/PageTwo" component={PageTwo} />
                       
                    </Switch>
                </div>
            </Router>
        );
    }
}