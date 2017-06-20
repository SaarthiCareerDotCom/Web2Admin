var React = require('react');
import DynamicField from './DynamicField';
import firebase from '../configuration/firebase-config.js';
var index;


var ListCreator = React.createClass({
		getInitialState:function(){
		return{
			required:1,
			courseId:[],
		};
	},

		handleclick:function(){
		 index= document.getElementById('browser').value;
		if(document.getElementById('browser').value){  
		this.setState({
			required:this.state.required -1 ,
		})
	}
	else{
		alert("Select a course");
	}
},

	createSelectedItems:function(){
			let items = [];
			for(let i=0; i< this.state.courseId.length;i++){
				items.push(<option key={i} value={this.state.courseId[i]} >Course-{this.state.courseId[i]}</option>)
			}
			return items;
		},
		onDropdownSelected:function(e){
			console.log("The val is",e.target.value);
		},

	getCourseName:function(){
		var ref = firebase.database().ref();
		var allCourse = ref.child('allcourse/');
		var _this = this;
		var _courseId = [];
		allCourse.on('value',function(data){
			_courseId = Object.keys(data.val());
		})
		_this.setState({
			courseId: _courseId
		});	
	},

	
	sendMessage:function(){
	var x= document.getElementById("myTxt").value; 
	var ref = firebase.database().ref();
	var coursesRef = ref.child('admin/notifications/'+index);
	var course = coursesRef.push();
	course.set({
		message:x
	})
		this.setState({
			required:this.state.required + 1,
		})
},


	render:function(){
	if(this.state.required == 1){
		return(
			<div>
				<input list="courses" name="course" id="browser" onClick={this.getCourseName}/>
				<datalist id="courses">
			{this.createSelectedItems()}
				</datalist>
				<input type="submit" onClick={this.handleclick}/>
			</div>
		);
	}
else
{
		return(
				<div className="row">
				<div className="columns medium-4 large-4 small-centered">
						<br/>
							<h2 className="text-centered" >Course Notifications</h2>
							<br/>
							<textarea type="text" id="myTxt" ></textarea>
							<button className="success button expanded" onClick={this.sendMessage} type="submit">Send</button>
					</div>  
					</div>
		);   
}
	}
}); 

module.exports = ListCreator;
