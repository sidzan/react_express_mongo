const React = require('react')
const App = require ('./app')
const Nav = require('./navigation')
const User = require('./user')

const Index = React.createClass({
    render:function(){
        return <div>
            <Nav/>
            <User/>
        </div>
    },
})
module.exports = Index; 
