var React = require('react');
var Nav = require('Nav');
// var Admin=require('Admin');
var Main = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
    </div>
  );
}

module.exports = Main;
