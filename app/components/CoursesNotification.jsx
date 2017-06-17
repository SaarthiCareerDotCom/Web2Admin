var React = require('react');
 import {sendMessage} from 'SendMessage';
var CoursesNotification = React.createClass( {
    
getInitialState:function(){
return{
required:1,
};
},
handleclick:function(){
this.setState({
required:this.state.required -1 ,
})
},
sendMessage:function(){
    var x= document.getElementById("myTxt").value; 
    console.log(x);
    this.setState({
      required:this.state.required + 1,
    })
},
render:function(){
  if(this.state.required == 1)
  {  
  return ( 
<div className="row">
<div className="columns medium-8 large-centered small-4">
      <div className=" button-group">
      <a className="secondary button expanded " onClick={this.handleclick}>Course1</a>
      <a className="success button expanded" onClick={this.handleclick}>Course2</a>
      <a className="warning button expanded"onClick={this.handleclick}>Course3</a>
      <a className="alert button expanded"onClick={this.handleclick}>Course4</a>
     </div>
   </div>
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
              <p id></p>
          </div>  
          </div>
    );   
}
  }
});

module.exports = CoursesNotification;
