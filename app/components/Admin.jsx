var React=require('react');
var Admin=React.createClass({
    render:function(){
            return(
                <div>
<div className="admin-panel clearfix">
  <div className="slidebar">
    <div className="logo">
      <a href=""></a>
    </div>
    <ul>
      <li><a href="#" id="targeted">Dashboard</a></li>
      <li><a href="#">Notifications</a></li>
      <li><a href="#">Courses</a></li>
    </ul>
  </div>
  </div>
  <div className="main">
    <div className="mainContent clearfix">
      <div id="dashboard"></div>
       <div id="Notifications">
       </div>
       <div id="Courses">
</div>
</div>
</div>
</div>
);
}
});
module.exports=Admin;
