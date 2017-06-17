var React = require('react');
var ReactDOM = require('react-dom');
import createFragment from 'react-addons-create-fragment';
var Nav = require('Nav');
//import Bar from 'ProgressBar';
var list = [
    {
        key: 1, name: "course1",
    },
    {
        key: 2, name: "course2",
    },

]
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
        // What do I do here?
    },
    getInitialState: function () {
        return { inputs: [] };
    },
    render: function () {
        var inputs = this.state.inputs;
        return (
            // Setting up the form
            // Blah blah
            <div className="form-group">
                <div className="col-sm-4">
                    {inputs.map(function (input, index) {
                        var ref = "input_" + index;
                        return (
                            <div className="input-group" key={index}>
                                <input type="text" className="form-control margin-bottom-12px" placeholder={this.props.placeholder0} value={input.name} ref={ref} aria-describedby={ref} />
                                <span className="input-group-addon" onClick={this.removeInputField.bind(this, index)} id={ref} ><button className="success button small" type="submit">Remove</button></span>
                                <input type="text" className="form-control margin-bottom-12px" placeholder={this.props.placeholder1} value={input.name} ref={ref} aria-describedby={ref} />
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
        return (
            <li><a>{this.props.item.name}</a></li>
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
        this.setState({
            required: this.state.required - 1,
        })
    },
    // loop: function () {
    //     return (list.map((item, i) => {
    //         console.log("in loop function", i);
    //         var course = createFragment(
    //             {
    //                 key: item.key,
    //                 name: item.name
    //             }
    //         );
    //         return (<courseDescription key={i} item={item.name} />);
    //     })
    //     );
    // },
    render: function () {
        if (this.state.required == 1) {
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
                                       list.map((item, i) => {
                                       return (<CourseDescription key={i} item={item} />);
                                       })
                                  }
                                </ul>
                            </li>
                        </ul>

                    </div>
                    {
                        list.map((item, i) => {
                            return (<CourseDescription key={i} item={item} />);
                        })
                    }
                    {/*<button className="secondary button large" onClick={this.handleclick}> Add Course</button>
                    <br />
                    <button className="success button large" onClick={this.handleclick}>Modify Course</button>
                    <br />
                    <button className="warning button large" onClick={this.DeleteCourse}>Delete Course</button>*/}

                </div>
            );
        }
        else  {
            return (
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
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

                    </div>
                </div>
            );

        }
    }
});
module.exports = Courses;
