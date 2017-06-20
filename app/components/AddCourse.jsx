var React = require('react');
var DynamicField=require('DynamicField');
var AddCourse = React.createClass({
    onSubmit: function(){
        console.log(this.refs.syllabus.getValue());
    },
    render: function () {
            return (
                <div>
                    <div className="row">
                    <div className="columns medium-4 large-4 small-centered">
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
                        <DynamicField placeholder0="Heading" placeholder1="Portions" nameButton="Add Syllabus" ref="syllabus"/>
                        <label className="text-center"><strong>To Add a FAQ Press Add</strong></label>
                        <DynamicField placeholder0="Questions" placeholder1="Answers" nameButton="Add FAQ" ref="faq"/>
                        <button className="success button expanded" onClick={this.onSubmit}>Submit</button>
                    </div>
                </div>
                    
                    }
                </div>
            );
    }
});
module.exports = AddCourse;