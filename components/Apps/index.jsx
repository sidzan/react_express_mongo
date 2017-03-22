const React = require('react')
const App = require ('./app')

const Index = React.createClass({
    render:function(){
        return <div>
            App Main
            <App/>
        </div>
    },
})
module.exports = Index; 
