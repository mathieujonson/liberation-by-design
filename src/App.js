import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'
import HowToPlay from './components/HowToPlay/HowToPlay'
import Definitions from './components/Definitions/Definitions'
import Play from './components/Play/Play'
import Login from './components/Admin/Login'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import AdminIndex from './components/Admin/Index'
import AdminDefinitions from './components/Admin/Definitions/Definitions'
import './styles/main.css'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="content-container">
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/how-to-play" component={HowToPlay} />
                            <Route path="/our-definitions" component={Definitions} />
                            <Route path="/play" component={Play} />
                            <Route path="/admin/index" component={AdminIndex} />
                            <Route path="/admin/definitions" component={AdminDefinitions} />
                            <Route path="/admin" component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App
