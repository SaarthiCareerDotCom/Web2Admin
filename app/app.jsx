var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
// Load foundation
import StudentDashboard from 'StudentDashboard';
import Courses from 'Courses';
import CoursesNotification from 'CoursesNotification';
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    <Route path="coursesnotification" component={CoursesNotification}/>
        <Route path="courses" component={Courses}/>
    </Route>
    <Route path="studentdashboard" component={StudentDashboard}/>
  </Router>,
  document.getElementById('app')
);
