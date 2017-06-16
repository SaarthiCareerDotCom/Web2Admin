var React = require('react');
//import Bar from 'ProgressBar';

var Courses = React.createClass({
    render: function () {


        return (
            <div>
                <h1>C++</h1>
                <h1>Course Hilights</h1>
                <p>Object Oriented Programming enables the programmer to manipulate actual entities. Know how to ask these entities to work directly, learn what you can do with the system and discover how programs written using the Object Oriented module are extensible. Solve interview questions and be prepared to face the battle with confidence.</p>
                <h1>Course Content</h1>
                <p>Embark your journey with us by improving your fundamentals and core concepts of C++.
                Work at labs to assimilate topics easily. Learn to use tools like GitHub, Integrated Development Environments like CodeBlocks, Debugger and GCC compiler which are popular in the industry.
                Increase your chances of cracking tough interviews at superlative companies. Acquire a competitive edge in the interviews.
                </p>
                <h1>No Of Students Enrolled</h1>
                <progress value="50" max="100">
                </progress>
            </div>
        );
    }
});

module.exports = Courses;
