var React = require('react');
var ReactDOM = require('react-dom');
import createFragment from 'react-addons-create-fragment';
import firebase from '../configuration/firebase-config.js';
var courseId = [];
var coursename = [];
var Nav = require('Nav');
var j=0;
var ID=[];

var DynamicField = React.createClass({

    addInputField: function (e) {
        e.preventDefault();

        var inputs = this.state.inputs;
        inputs.push({ name: null });
        this.setState({ inputs: inputs });
    },
    removeInputField: function (index) {
        var inputs = this.state.inputs;
        inputs.splice(index, 1);
        this.setState({ inputs: inputs });
    },
    handleSubmit: function (e) {
        e.preventDefault();

    },
    getInitialState: function () {
        return { inputs: [] };
    },
   
    render: function () {
        var inputs = this.state.inputs;
        return (
            <div className="form-group">
                <div className="col-sm-4">
                    {inputs.map(function (input, index) {
                        var ref = "input_" + index;
                        console.log(ref);
                        return (
                            <div className="input-group" key={index}>
                                {console.log(ID[j])}
                                <input type="text" className="form-control margin-bottom-12px" placeholder={this.props.placeholder0} value={input.name} ref={ref} aria-describedby={ref}  />
                                <span className="input-group-addon" onClick={this.removeInputField.bind(this, index)} id={ref} ><button className="success button small" type="submit" >Remove</button></span>
                                <textarea type="text" className="form-control margin-bottom-12px" placeholder={this.props.placeholder1} value={input.name} ref={ref} aria-describedby={ref} />
                                <span className="input-group-addon" onClick={this.removeInputField.bind(this, index)} id={ref} ><button className="success button small" type="submit">Remove</button></span>
                            </div>
                        )
                    }.bind(this))}
                    <button className="btn btn-success btn-block success button expanded" onClick={this.addInputField} type="submit">{this.props.nameButton}</button>
                </div>
            </div>
        );
    }
});

var CourseDescription = React.createClass({

    render: function () {
    console.log(courseId.length);
            return (
            <li><a>{coursename[this.props.value]}</a></li>
        );
    }
});

var Courses = React.createClass({
    getInitialState: function () {
        return {
            required: 1,

        };
    },
    DeleteCourse: function () {
        console.log("Course deleted")
    },

    handleclick: function () {
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/');
        //var newcourse = allCourse.push();
        allCourse.child('id3').update({
            description: "Algo time",
            fees: 1001,
            name: "Data Structure",
            trainer: "Himanshu"
        });
        this.setState({
            required: this.state.required - 1,
        })
    },

    addCourse:function(addCourseId){
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


     getCourseId:function(){
	var ref = firebase.database().ref();
	var allCourse = ref.child('allcourse/');
	allCourse.on('value',function(data){
		courseId = Object.keys(data.val());
		console.log(3,courseId);
		})
	},

     courseName:function(){
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/');
        allCourse.on('value',function(data){
            var key = Object.keys(data.val());
            for(var i=0; i < key.length; i++){
                coursename[i]= data.val()[key[i]]['name']
                console.log("name :" + coursename[i] + i);
            }
            console.log(2,coursename,3);
        })
    },

    render: function () {
        {this.getCourseId()}
        {this.courseName()}    
        if (this.state.required == 1) {
            //console.log(courseId,111);
            return (
                <div>
                    <div className="sidebar">
                        <ul id="nav">
                            <li><a className="selected" >Dashboard</a></li>
                            <li><a  onClick={this.handleclick}>Add Course</a></li>
                            <li><a onClick={this.handleclick}>Modify Course</a></li>
                            <li><a onClick={this.DeleteCourse}>Delete Course</a></li>
                            <li><a >Courses</a>
                                <ul className="submenu ">
                                 {
                                       courseId.map((item, i) => {
                                       return (<CourseDescription key={i} item={item} value={j++} />);
                                       
                                       })
                                  }
                                </ul>
                            </li>
                        </ul>

                    </div>
                    {
                        courseId.map((item, i) => {
                            j++;
                            return (<CourseDescription key={i} item={item} />);
                        })
                    }
                    
                </div>
            );
        }
        else  {
            return (
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        <form onSubmit={this.onFormSubmit}>
                        <br />
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
                        <DynamicField placeholder0="Heading" placeholder1="Portions" nameButton="Add Syllabus"/>
                        <label className="text-center"><strong>To Add a FAQ Press Add</strong></label>
                        <DynamicField placeholder0="Questions" placeholder1="Answers" nameButton="Add FAQ"/>
                        <button className="success button expanded" type="submit">Submit</button>
                       </form>
                    </div>
                </div>
            );

        }
    }
});
module.exports = Courses;
