var React = require('react');
var {Link, IndexLink} = require('react-router');
var Nav = React.createClass({
  render: function () {
    return (
  <div>
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Admin Dashboard</li>
          </ul>
        </div>
      </div>
            <div className="sidebar">
        <ul id="nav">
            <li>
              <Link to="/coursesnotification" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>Notifications</Link>
            </li>
            <li>
              <Link to="/courses" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Courses</Link>
            </li>
            {/*<li>
              <Link to="/QAforum" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>QAforum</Link>
            </li>*/}
            <li onClick={this.handleClick}>
              <Link to="/addcourse" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Add Course</Link>
            </li>
            </ul>
        </div>
   </div>
    );
  }
});

module.exports = Nav;