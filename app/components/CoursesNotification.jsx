var React = require('react');
import {sendMessage} from 'SendMessage';
import firebase from '../configuration/firebase-config.js';
var courseId =[];
var index;

var ListCreator = React.createClass({
		getInitialState:function(){
		return{
			required:1,
		};
	},

  	handleclick:function(){
		 index= document.getElementById('browser').value;
		 //console.log(index,111);
		if(document.getElementById('browser').value){  
			//console.log("Hello");
		this.setState({
			required:this.state.required -1 ,
		})
	}
	else{
		alert("Select a course");
	}
	},
	createSelectedItems:function(){
      //console.log(1,courseId);
      let items = [];
      //console.log(2,courseId);
      for(let i=0; i<=courseId.length;i++){
        items.push(<option key={i} value={courseId[i]} >Course-{courseId[i]}</option>)
      }
      return items;
    },
    onDropdownSelected:function(e){
    	console.log("The val is",e.target.value);
    },

	getCourseName:function(){
	var ref = firebase.database().ref();
	var allCourse = ref.child('courses/');
	allCourse.on('value',function(data){
		courseId = Object.keys(data.val());
		console.log(3,courseId);
		
		})
	},

	sendMessage:function(){
    var x= document.getElementById("myTxt").value; 
    console.log(x);
	console.log(index,222);
	var ref = firebase.database().ref();
	var coursesRef = ref.child('courses/'+index);
	var course = coursesRef.push();
	course.set({
		message:x
	})
    this.setState({
    	required:this.state.required + 1,
    })
},


  render:function(){
	{this.getCourseName()}
	if(this.state.required == 1){
    return(
      <div>
        <input list="courses" name="course" id="browser"/>
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
        <div className="columns medium-6 large-4 small-centered">
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

// var CoursesNotification = React.createClass({
    
// 	getInitialState:function(){
// 		return{
// 			required:1,
// 		};
// 	},

// 	handleclick:function(){
// 		this.setState({
// 			required:this.state.required -1 ,
// 		})
// 	},


// render:function(){
//   if(this.state.required == 1)
//   {  
//   return (
//     <ListCreator/>
//   );
// }
// else
// {
//     return(
//         <div className="row">
//         <div className="columns medium-6 large-4 small-centered">
//             <br/>
//               <h2 className="text-centered" >Course Notifications</h2>
//               <br/>
//               <textarea type="text" id="myTxt" ></textarea>
//               <button className="success button expanded" onClick={this.sendMessage} type="submit">Send</button>
//               <p id></p>
//           </div>  
//           </div>
//     );   
// }
//   }
// });

module.exports = ListCreator;
