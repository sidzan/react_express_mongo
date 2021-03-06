const React = require("react");
const Router = require ('react-router-dom')
const Link  = Router.Link
const Nav = React.createClass({
    render:function(){
        return <div>
        <nav className="nav">
          <div className="nav-left">
            <a className="nav-item">
              <img src="/static/beer.png" alt="Beer logo"/>
            </a>
          </div>

          <div className="nav-center">
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
            </a>
            <a className="nav-item">
              <span className="icon">
                <i className="fa fa-twitter"></i>
              </span>
            </a>
          </div>

          <span className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </span>

          <div className="nav-right nav-menu">
            <Link className="nav-item" to="/user">
                User
            </Link>
            <Link className="nav-item" to="/quotes">
                Quotes
            </Link>
            <a className="nav-item">
              Home
            </a>
            <a className="nav-item" href="http://bulma.io/" target="_blank">
              Documentation
            </a>
            <a className="nav-item">
              Blog
            </a>

            <span className="nav-item">
              <a className="button" >
                <span className="icon">
                  <i className="fa fa-twitter"></i>
                </span>
                <span>Tweet</span>
              </a>
              <a className="button is-primary">
                <span className="icon">
                  <i className="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </span>
          </div>
        </nav>
        {this.props.children}
    </div>
    }
});
module.exports=Nav;
