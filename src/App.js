import './App.css'

import { Component } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
 } from 'react-router-dom'

import Menu from './components/Menu'

import Home from './pages/Home'
import Movies from './pages/Movies'
import Dummy from './pages/Dummy'

import TokenContext from './contexts/User'

class App extends Component {
    constructor(props) {
        super(props)

        this.login = (token) => {
            this.setState({
                logged: true,
            }, () => {
                window.localStorage.setItem('logged', true)
            })
        }

        this.logout = () => {
            this.setState({
                logged: false
            }, () => {
                window.localStorage.removeItem('logged')
            })
        }

        this.state = {
            logged: window.localStorage.getItem('logged') || false,
            login: this.login,
            logout: this.logout
        }
    }

    render() {
        return (
            <Router>
                <TokenContext.Provider value={this.state}>
                    <Menu />
                    <div className="container">
                        <Switch>
                            <Route path="/movies">
                                <Movies />
                            </Route>
                            <Route path="/dummy">
                                <Dummy />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </TokenContext.Provider>
            </Router>
        )
    }
}

export default App
