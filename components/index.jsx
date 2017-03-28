const React             = require('react');
const Router            = require('react-router-dom').BrowserRouter;
const Route             = require('react-router-dom').Route;
const Switch            = require('react-router-dom').Switch;
const App               = require('./Apps/app')
const User              = require('./Apps/user')
const Nav               = require('./Apps/navigation')
const Product           = require('./Apps/product')

const Routes = React.createClass({
    render:function(){
        return <Router>
            <Nav> 
                <Switch>
                    <Route path="/user" component={User}/>
                    <Route path="/quotes" component={App}/>
                </Switch>
            </Nav> 
        </Router>
    }
})


module.exports = Routes;

