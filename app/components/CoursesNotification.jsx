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
   <div>
      <div className="expanded button-group">
      <a className="secondary button" onClick={this.handleclick}>Course1</a>
      <a className="success button" onClick={this.handleclick}>Course2</a>
      <a className="warning button"onClick={this.handleclick}>Course3</a>
      <a className="alert button"onClick={this.handleclick}>Course4</a>
     </div>
   </div>
  );
}
else
{
    return(
          <div>
            <br/>
              <h2 className="text-centered" >Course Notifications</h2>
              <br/>
              <textarea type="text" id="myTxt" ></textarea>
              <button className="success button expanded" onClick={this.sendMessage} type="submit">Send</button>
              <p id></p>
          </div>  
    );   
}
  }
});

module.exports = CoursesNotification;
