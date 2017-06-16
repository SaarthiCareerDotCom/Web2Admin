var React = require('react');

var StudentDashboard = React.createClass({

  getDefaultProps:function(){
  return{
    name:"shubham",
    branch:"cse",
    CoursesEnrolled:"",
    email:"shubham@gmail.com",
    college:"Dayanand Sagar College of Engineering",
    contactno:"7022140310"
  }
  },
  render: function () {
    return (
<div className="row" >
  <div className="small-4 large-4 columns">
    <form >
  <img src="http://foundation.zurb.com/sites/docs/assets/img/generic/rectangle-1.jpg"/>
  <div className="card-section">
    <label >Name</label>
    <input className="" type="text" name="name" placeholder="name" value={this.props.name} onChange="" />
    
    <label >Email</label>
     <input className="" type="email" name="email" placeholder="E-mail" value={this.props.email}  onChange=""/>
     <label >College</label>
       <input className="" type="text" name="college" placeholder="college" value={this.props.college} onChange="" />
       <label >Branch</label>
       <input className="" type="text" name="branch" placeholder="branch" value={this.props.branch} onChange="" />
       <label for="name">ContactNo</label>
       <input className="" type="number" name="contactno" placeholder="contactno" value={this.props.contactno} onChange=""/>
       <button type="button" className="success button centre">Submit</button>
  </div>
  </form>
  </div>
</div>
    );
  }
});
module.exports = StudentDashboard;