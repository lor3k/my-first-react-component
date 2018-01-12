import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import MyFirstComponent from './MyFirstComponent';
import Home from './Home';
import Dashboard from './Dashboard';
import WeekDay from './WeekDay';
import TextComponent from './TextComponent';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Link to='/'>Link to main!</Link><br />
                    <Link to='/home'>Link to home!</Link><br />
                    <Link to='/dashboard'>Link to dashboard!</Link><br />
                    <Link to='/weekday'>Link to weekday!</Link><br />

                    <Route path='/' exact={true} render={
                        () => (<MyFirstComponent name='Pawel' showName={true} />)
                    } />

                    <Route path='/home' component={Home} />
                    <Route path='/dashboard' component={Dashboard} />

                    <TextComponent text={4}/>
                    And this is text from plain WeekDay component:
                    <WeekDay number={5} />

                </div>
            </Router>
        );
    }
}

export default App;
