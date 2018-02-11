import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home/Home'
import HowToPlay from './components/HowToPlay/HowToPlay'
import Definitions from './components/Definitions/Definitions'
import Play from './components/Play/Play'
import AdminIndex from './components/Admin/Index'
import NotFound from './components/NotFound'
import Footer from './components/Footer'
import AdminQuestions from './components/Admin/Questions/index'
import AdminQuestionsForm from './components/Admin/Questions/form'
import Dashboard from './components/Admin/AdminNav'
import AdminDefinitions from './components/Admin/Definitions/index'
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
                            <Route path="/admin/definitions" component={AdminDefinitions} />
                            <Route path="/admin/dashboard" component={Dashboard} />
                            <Route path="/admin/questions/new" component={AdminQuestionsForm} />
                            <Route path="/admin/questions" component={AdminQuestions} />
                            <Route path="/admin" component={AdminIndex} />
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
