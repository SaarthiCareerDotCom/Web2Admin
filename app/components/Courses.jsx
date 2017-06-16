var React = require('react');
var ReactDOM = require('react-dom');
import createFragment from 'react-addons-create-fragment';
var Nav = require('Nav');
//import Bar from 'ProgressBar';
var list = [
    {
        key: 1, name: "shubham"
    },
    {
        key: 2, name: "ajay"
    },

]
var DynamicField = React.createClass({

    addInputField: function(e) {
        e.preventDefault();

        var inputs = this.state.inputs;
        inputs.push({name: null});
        this.setState({inputs : inputs});
    },
    removeInputField: function(index) {
        var inputs = this.state.inputs;
        inputs.splice(index, 1);
        this.setState({inputs : inputs});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        // What do I do here?
    },
    getInitialState: function() {
        return {inputs : []};
    },
    render: function (){
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
                                <input type="text" className="form-control margin-bottom-12px" placeholder="Questions" value={input.name} ref={ref} aria-describedby={ref} />
                                <span className="input-group-addon" onClick={this.removeInputField.bind(this, index)} id={ref} ><button className="success button small" type="submit">Remove</button></span>
                                <input type="text" className="form-control margin-bottom-12px" placeholder="Answers" value={input.name} ref={ref} aria-describedby={ref} />
                                <span className="input-group-addon" onClick={this.removeInputField.bind(this, index)} id={ref} ><button className="success button small" type="submit">Remove</button></span>
                           </div>
                       )
                   }.bind(this))}
                    <button className="btn btn-success btn-block success button expanded" onClick={this.addInputField} type="submit">Add FAQ</button>
               </div>
           </div>
        );
    }
});
var CourseDescription = React.createClass({
    render: function () {
        return (
            <div>{this.props.item.name}</div>
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
    test:function(){
    return <h1>hello</h1>;
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
    AddFAQ: function () {
        if (this.state.required != 2)
            this.setState({
                required: this.state.required + 2,
            })
        else {
            this.setState({
                required: this.state.required - 2,
            })
        }
    },


    render: function () {
        if (this.state.required == 1) {
            return (
                <div>
                    {
                        list.map((item, i) => {
                            return (<CourseDescription key={i} item={item} />);
                        })
                    }
                    <button className="secondary button large" onClick={this.handleclick}> Add Course</button>
                    <br />
                    <button className="success button large" onClick={this.handleclick}>Modify Course</button>
                    <br />
                    <button className="warning button large" onClick={this.DeleteCourse}>Delete Course</button>
                </div>
            );
        }
        else if (this.state.required == 0) {
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
                        <label className="text-center">To Add a FAQ Press Add</label>
                        <DynamicField/>
                        <button className="success button expanded" type="submit">Submit</button>
                        
                    </div>
                </div>
            );

        }
        else if (this.state.required == 2) {
            return (
                <div className="row">
                    <div className="columns medium-6 large-4 small-centered">
                        <h1 className="text-center">Faq</h1>
                        <label>Question</label>
                        <textarea type="text" placeholder="Question" ></textarea>
                        <label>Answer</label>
                        <textarea type="text" placeholder="Answer" ></textarea>
                        <button className="success button expanded" type="submit" onClick={this.AddFAQ}>Submit</button>
                    </div>
                </div>
            );
        }
    }
});
module.exports = Courses;
