var React = require('react');
var ReactDOM = require('react-dom');
import createFragment from 'react-addons-create-fragment';
import firebase from '../configuration/firebase-config.js';
var Nav = require('Nav');
import DynamicField from './DynamicField';

var ListCreator = React.createClass({
    getInitialState: function () {
        return {
            courses: [],
            getcourse: 1,
            selectedindex: 0,
        };
    },

    handleclick: function () {
        this.setState({
            selectedindex: document.getElementById('browseCourses').value,
            getcourse: 2
            //  console.log(index);]
        })
        console.log(this.state.courses[this.state.selectedindex]);
        if (document.getElementById('browseCourses').value) {
            this.setState({
                getcourse: this.state.getcourse + 1,
            })
        }
        else {
            alert("Select a course");
        }
    },

    onCourseSelected: function(e){
        console.log(e);
    },

    createSelectedItems: function () {
        let items = [];
        for (let i = 0; i < this.state.courses.length; i++) {
            items.push(<option key={i} value={i} >{this.state.courses[i].courseName}</option>)
        }
        return items;
    },
    onDropdownSelected: function (e) {
        console.log("The val is", e.target.value);
    },

    getCourses: function () {
        console.log('123');
        var ref = firebase.database().ref();
        var _allCourse = [];
        var allCourse = ref.child('allcourse/');
        var _this = this;
        allCourse.on('value', function (data) {
            var _Keys = Object.keys(data.val());
            for (var i = 0; i < _Keys.length; ++i) {
                _allCourse.push({ "courseId": _Keys[i], "courseName": data.val()[_Keys[i]]["name"], "courseDetails": data.val()[_Keys[i]] });
                //console.log(_allCourse);
            }
            //console.log(_allCourse);
            _this.setState({
                courses: _allCourse
            });
        });

    },

    render: function () {
        if (this.state.getcourse == 1) {
            return (
                <div>
                    <input list="courses" name="course" id="browseCourses" onClick={this.getCourses} />
                    <datalist id="courses" onSelect={this.onCourseSelected}>
                        {this.createSelectedItems()}
                    </datalist>
                    <input type="submit" onClick={this.handleclick} />
                </div>
            );
        }
        else {
            return (
                <p>{this.state.courses[this.state.selectedindex].courseDetails}</p>
            );
        }
    }
});


var Courses = React.createClass({
    getInitialState: function () {
        return {
            required: 0,
            courses: [],
        };
    },

    DeleteCourse: function () {
        console.log("Course deleted")
    },

    handleclick: function () {
        this.setState({
            required: this.state.required + 1,
        })
    },


    addCourse: function (addCourseId) {
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/');
        allCourse.child('111').update({
            description: 'this is data strcutre',
            fees: '5001',
            name: 'Data Structure',
            trainer: 'Himanshu',
            syllabus: 'everything',
            //faq: " "

        });
    },

    enrollUserInaCourse: function () {
        var ref = firebase.database().ref();
        ref.child('admin/enrolled_users/').child('222').child('users').push().update({
            uid: 'xyz'
        })
    },

    activeACourse: function () {
        var ref = firebase.database().ref();
        ref.child('/admin/enrolled_users').child('111').push().update({
            active: true
        })
    },

    deactiveACourse: function () {
        var ref = firebase.database().ref();
        ref.child('/admin/enrolled_users').child('111').push().update({
            active: false
        })
    },

    onSubmit: function () {
        console.log(this.refs.syllabus.getValue());
    },
    render: function () {
        // if (this.state.required == 1) {
        return (

            <div className="row">
                <div className="columns medium-4 large-4 small-centered">
                    <br />
                    <ListCreator />
                    <br />
                    <button className="success button " onClick={this.handleclick}>Modify</button>
                    {(this.state.required) &&
                        <div>
                            <h2 className="text-center" >Course</h2>
                            <br />
                            <label>Course Title</label>
                            <textarea type="text" placeholder="Course Title" ></textarea>
                            <label>Course Description</label>
                            <textarea type="text" placeholder="Course Description" ></textarea>
                            <label>Course Fees</label>
                            <input type="number" placeholder="Course Fees"></input>
                            <label>Course Trainers</label>
                            <input type="text" placeholder="Course Trainers"></input>
                            <label className="text-center"><strong>To Add a Syllabus Press Add</strong></label>
                            <DynamicField placeholder0="Heading" placeholder1="Portions" nameButton="Add Syllabus" ref="syllabus" />
                            <label className="text-center"><strong>To Add a FAQ Press Add</strong></label>
                            <DynamicField placeholder0="Questions" placeholder1="Answers" nameButton="Add FAQ" ref="faq" />
                            <button className="success button expanded" onClick={this.onSubmit}>Submit</button>
                        </div>

                    }
                </div>
            </div>
        );
    }
});
module.exports = Courses;
